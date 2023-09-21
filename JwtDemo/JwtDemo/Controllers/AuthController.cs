using JwtDemo.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JwtDemo.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : Controller
    {
        IConfiguration _configuration;
        public AuthController(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]User user)
        {
            if (user == null)
                return BadRequest("Invalid credentials");
            if (user.username == "faheem" && user.password == "1234")
            {
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                        _configuration["Jwt:Issuer"],
                        _configuration["Jwt:Audience"],
                        claims: new List<Claim>(),
                        expires: DateTime.UtcNow.AddMinutes(10),
                        signingCredentials: signIn);

                var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
                return Ok(JsonConvert.SerializeObject(tokenString));
            }
            else
                return Unauthorized();
        }
    }
}
