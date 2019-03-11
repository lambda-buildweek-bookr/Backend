exports.up = function(knex) {
  return knex.schema
    .createTable("users", function(users) {
      users.increments();

      users
        .string("name", 128)
        .notNullable()
        .unique();

      users.string("password", 255).notNullable();
    })
    .createTable("books", function(books) {
      books.increments();

      books.text("title", 255).notNullable();

      books.text("author", 255).notNullable();

      books.text("publisher", 255).notNullable();

      books.text("image_url", 255).notNullable();

      books.text("brief_desc", 128).notNullable();

      books.text("detailed_desc", 255).notNullable();
    })
    .createTable("reviews", function(reviews) {
      reviews.increments();

      reviews.text("review").notNullable();

      reviews
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");

      reviews
        .integer("book_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("books");

      reviews.unique(["user_Id", "book_id"]);

      reviews.integer("rating").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("books")
    .dropTableIfExists("reviews");
};
