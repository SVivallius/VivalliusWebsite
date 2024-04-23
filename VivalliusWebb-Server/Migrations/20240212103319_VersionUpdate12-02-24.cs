using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VivalliusWebb_Server.Migrations
{
    /// <inheritdoc />
    public partial class VersionUpdate120224 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Bookings");

            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "Bookings",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Bookings",
                newName: "Genre");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Bookings",
                newName: "Phone");

            migrationBuilder.RenameColumn(
                name: "Genre",
                table: "Bookings",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Bookings",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
