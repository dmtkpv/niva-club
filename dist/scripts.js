(() => {



    // ------------------
    // Helpers
    // ------------------

    function image (key) {
        return `<img src="/images/${key}">`
    }

    function text (label, title) {
        return `<p class="label">${label}</p><p class="title">${title}</p>`
    }



    // ------------------
    // Data
    // ------------------

    const Data = {

        size: 380,
        content: image('logo.png'),

        children: [


            // instagram

            {
                radius: 410,
                angle: 2,
                size: 140,
                content: image('instagram.png'),
            },


            // facebook

            {
                radius: 521,
                angle: 23.6,
                size: 164,
                content: image('facebook.png'),
                children: [
                    {
                        radius: 206,
                        angle: 26.6,
                        size: 106,
                        content: text('Страница', 'Нива.Клуб'),
                    },
                    {
                        radius: 205,
                        angle: 331.2,
                        size: 95,
                        content: text('Группа', 'Нива.Клуб'),
                    }
                ]
            },


            // niva 4x4

            {
                radius: 662,
                angle: 38.4,
                size: 122,
                content: image('facebook.png'),
            },


            // youtube

            {
                radius: 466,
                angle: 52.6,
                size: 144,
                content: image('youtube.png'),
            },


            // viber

            {
                radius: 338,
                angle: 70.4,
                size: 106,
                content: image('viber.png'),
            },


            // chevrolet niva club

            {
                radius: 352,
                angle: 98.8,
                size: 152,
                content: image('chevrolet.jpg'),
                children: [
                    {
                        radius: 137,
                        angle: 47.6,
                        size: 70,
                        content: image('vk.png'),
                    },
                    {
                        radius: 124,
                        angle: 103.2,
                        size: 72,
                        content: image('telegram.png'),
                    }
                ]
            },


            // help 4x4

            {
                radius: 345,
                angle: 129.8,
                size: 133,
                content: image('help.png'),
                children: [
                    {
                        radius: 120,
                        angle: 95.4,
                        size: 54,
                        content: image('telegram.png'),
                    },
                    {
                        radius: 130,
                        angle: 150,
                        size: 64,
                        content: image('viber.png'),
                    }
                ]
            },


            // 4x4ab

            {
                radius: 610,
                angle: 145.6,
                size: 136,
                content: image('market.png'),
                children: [
                    {
                        radius: 141,
                        angle: 65.4,
                        size: 58,
                        content: image('vk.png'),
                    },
                    {
                        radius: 137,
                        angle: 111.9,
                        size: 64,
                        content: image('facebook.png'),
                    },
                    {
                        radius: 137,
                        angle: 152.8,
                        size: 64,
                        content: image('viber.png'),
                    }
                ]
            },


            // team

            {
                radius: 454,
                angle: 169,
                size: 190,
                content: image('team.png'),
                children: [
                    {
                        radius: 184,
                        angle: 133.6,
                        size: 94,
                        content: image('instagram.png'),
                    },
                    {
                        radius: 248,
                        angle: 164.2,
                        size: 102,
                        content: image('vk.png'),
                    },
                    {
                        radius: 192,
                        angle: 194,
                        size: 98,
                        content: image('youtube.png'),
                    }
                ]
            },


            // shop

            {
                radius: 478,
                angle: 209.7,
                size: 220,
                content: image('shop.png'),
                children: [
                    {
                        radius: 176,
                        angle: 117,
                        size: 75,
                        content: image('instagram.png'),
                    },
                    {
                        radius: 204,
                        angle: 153.3,
                        size: 102,
                        content: image('telegram.png'),
                    },
                    {
                        radius: 182,
                        angle: 193,
                        size: 102,
                        content: image('vk.png'),
                    },
                    {
                        radius: 188,
                        angle: 235.7,
                        size: 108,
                        content: image('cart.png'),
                    },
                    {
                        radius: 176,
                        angle: 275.8,
                        size: 86,
                        content: image('facebook.png'),
                    },
                    {
                        radius: 188,
                        angle: 313.6,
                        size: 84,
                        content: image('youtube.png'),
                    }
                ]
            },


            // forum

            {
                radius: 370,
                angle: 269.4,
                size: 258,
                content: image('facebook.png'),
            },


            // vk

            {
                radius: 450,
                angle: 310.9,
                size: 144,
                content: image('vk.png'),
            },


            // telegram

            {
                radius: 419,
                angle: 337.3,
                size: 148,
                content: image('telegram.png'),
                children: [
                    {
                        radius: 232,
                        angle: 0.7,
                        size: 108,
                        content: image('facebook.png'),
                    },
                    {
                        radius: 234,
                        angle: 312.2,
                        size: 108,
                        content: image('facebook.png'),
                    }
                ]
            }


        ]
    }



    // ------------------
    // Initialization
    // ------------------

    new MindMap('#map', {
        line: 30,
        padding: 40,
        minScale: 0.5
    }, Data)



})();