namespace BookApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args); //builder obj
            
            //add services
            builder.Services.AddControllers();

            var app = builder.Build();

            //add controller
            app.MapControllers();

            app.MapGet("/", () =>
            {
                return Results.Redirect("/api/books");
            });

            app.Run();
        }
    }
}