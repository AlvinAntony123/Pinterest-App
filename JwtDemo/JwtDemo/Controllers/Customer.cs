using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtDemo.Controllers
{
    [Route("api/controller")]
    [ApiController]
    public class Customer : Controller
    {
        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            return Ok("Faheem shams");
        }
    }
}
