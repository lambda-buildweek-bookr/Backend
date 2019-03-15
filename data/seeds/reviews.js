exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reviews")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("reviews").insert([
        {
          id: 75,
          user_id: 1,
          book_id: 1,
          rating: 2,
          review:
            "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut"
        },
        
        {
          "id": 31,
          "user_id": 4,
          "book_id": 11,
          "rating": 4,
          "review": "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat"
        },
        {
          "id": 88,
          "user_id": 4,
          "book_id": 12,
          "rating": 5,
          "review": "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat"
        },
        {
          "id": 63,
          "user_id": 4,
          "book_id": 13,
          "rating": 4,
          "review": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam"
        },
        {
          "id": 2,
          "user_id": 4,
          "book_id": 14,
          "rating": 5,
          "review": "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae"
        },
        {
          "id": 28,
          "user_id": 4,
          "book_id": 15,
          "rating": 2,
          "review": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed"
        },
        {
          "id": 48,
          "user_id": 5,
          "book_id": 1,
          "rating": 4,
          "review": "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis"
        },
      
        {
          "id": 4,
          "user_id": 5,
          "book_id": 13,
          "rating": 3,
          "review": "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi"
        },
        {
          "id": 26,
          "user_id": 5,
          "book_id": 15,
          "rating": 1,
          "review": "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget"
        },
        {
          "id": 34,
          "user_id": 5,
          "book_id": 16,
          "rating": 3,
          "review": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod"
        }
      ]);
    });
};
