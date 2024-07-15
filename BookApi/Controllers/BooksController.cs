using BookApi.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BookApi.Controllers
{
    //https://localhost:44326/api/books
    [Route("api/")]
    [ApiController]
    public class BooksController : ControllerBase
    {

        private Book[] _books = new Book[]
        {
            new Book{ Id = 1, Author = "Author One", Title = "Book One"},
            new Book{ Id = 2, Author = "Author Two", Title = "Book Two"},
            new Book{ Id = 3, Author = "Author Three", Title = "Book Three"},
        };

        [Route("books")]
        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetBooks()
        {
            return Ok(_books);
        }

    }

    
}
