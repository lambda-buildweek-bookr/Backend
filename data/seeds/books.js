
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert(
        [{
          "id": 1,
          "title": "varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt",
          "author": "Inness Al Hirsi",
          "publisher": "Kuphal-Rempel",
          "image_url": "http://dummyimage.com/400x400.jpg/ff4444/ffffff",
          "brief_desc": "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
          "detailed_desc": "quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus"
        }, {
          "id": 2,
          "title": "lectus in est risus auctor",
          "author": "Tito Monnery",
          "publisher": "Schmeler-Hahn",
          "image_url": "http://dummyimage.com/400x400.jpg/cc0000/ffffff",
          "brief_desc": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
          "detailed_desc": "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue"
        }, {
          "id": 3,
          "title": "sapien non mi integer ac neque duis bibendum morbi non quam nec",
          "author": "Jeffie Sculley",
          "publisher": "Koepp LLC",
          "image_url": "http://dummyimage.com/400x400.jpg/dddddd/000000",
          "brief_desc": "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
          "detailed_desc": "proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna"
        }, {
          "id": 4,
          "title": "libero quis orci nullam molestie nibh in",
          "author": "Fabe MacTerlagh",
          "publisher": "Mayert Group",
          "image_url": "http://dummyimage.com/400x400.jpg/cc0000/ffffff",
          "brief_desc": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
          "detailed_desc": "amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium"
        }, {
          "id": 5,
          "title": "non pretium quis lectus suspendisse potenti in eleifend quam a",
          "author": "Stafani Gaynes",
          "publisher": "Lemke LLC",
          "image_url": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff",
          "brief_desc": "cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum",
          "detailed_desc": "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est"
        }, {
          "id": 6,
          "title": "purus eu magna vulputate",
          "author": "Adolpho Irdale",
          "publisher": "Christiansen-Runolfsson",
          "image_url": "http://dummyimage.com/400x400.jpg/dddddd/000000",
          "brief_desc": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
          "detailed_desc": "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae"
        }, {
          "id": 7,
          "title": "sociis natoque penatibus et magnis dis parturient montes nascetur",
          "author": "Ingeberg Pinnell",
          "publisher": "Ruecker-Homenick",
          "image_url": "http://dummyimage.com/400x400.jpg/cc0000/ffffff",
          "brief_desc": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
          "detailed_desc": "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et"
        }, {
          "id": 8,
          "title": "vestibulum velit id pretium iaculis",
          "author": "Donica Menichini",
          "publisher": "Adams, Kuphal and Kilback",
          "image_url": "http://dummyimage.com/400x400.jpg/ff4444/ffffff",
          "brief_desc": "eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
          "detailed_desc": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo"
        }, {
          "id": 9,
          "title": "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
          "author": "Alec Snar",
          "publisher": "Gleason Group",
          "image_url": "http://dummyimage.com/400x400.jpg/cc0000/ffffff",
          "brief_desc": "tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
          "detailed_desc": "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis"
        }, {
          "id": 10,
          "title": "libero convallis eget eleifend luctus",
          "author": "Heinrick Ivanusyev",
          "publisher": "Runte, Schuster and Rippin",
          "image_url": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff",
          "brief_desc": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
          "detailed_desc": "interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean"
        }, {
          "id": 11,
          "title": "vehicula consequat morbi a ipsum integer a nibh in quis",
          "author": "Simonne Hamer",
          "publisher": "Tillman, Hamill and Stroman",
          "image_url": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff",
          "brief_desc": "pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc",
          "detailed_desc": "augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor"
        }, {
          "id": 12,
          "title": "a libero nam dui proin leo",
          "author": "Tallou Philipsen",
          "publisher": "Bruen and Sons",
          "image_url": "http://dummyimage.com/400x400.jpg/cc0000/ffffff",
          "brief_desc": "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci",
          "detailed_desc": "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus"
        }, {
          "id": 13,
          "title": "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",
          "author": "Cyb Hysom",
          "publisher": "Carroll Inc",
          "image_url": "http://dummyimage.com/400x400.jpg/dddddd/000000",
          "brief_desc": "a odio in hac habitasse platea dictumst maecenas ut massa",
          "detailed_desc": "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero"
        }, {
          "id": 14,
          "title": "odio odio elementum eu interdum eu tincidunt in leo maecenas",
          "author": "Dorothea Thickins",
          "publisher": "Mayert LLC",
          "image_url": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff",
          "brief_desc": "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales",
          "detailed_desc": "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus"
        }, {
          "id": 15,
          "title": "nunc vestibulum ante",
          "author": "Antoine Ivanyushin",
          "publisher": "Mueller-Flatley",
          "image_url": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff",
          "brief_desc": "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus",
          "detailed_desc": "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis"
        }, {
          "id": 16,
          "title": "vulputate elementum nullam varius nulla facilisi cras non velit nec",
          "author": "Emmalyn Jeskins",
          "publisher": "Howell, Walker and Bergstrom",
          "image_url": "http://dummyimage.com/400x400.jpg/cc0000/ffffff",
          "brief_desc": "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur",
          "detailed_desc": "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia"
        }]
        
      );
    });
};
