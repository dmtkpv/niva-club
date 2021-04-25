(() => {



    // ------------------
    // Helpers
    // ------------------

    function image (key) {
        return `<a class="mm-link--image"><img src="images/${key}"></a>`
    }

    function text (label, title, type, scale) {
        return `<a class="mm-link--text mm-link--${type}" style="transform: scale(${scale})"><p class="label">${label}</p><p class="title">${title}</p></a>`
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
                link: 'https://www.instagram.com',
                content: image('instagram.png')
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
                        size: 108,
                        link: 'https://www.facebook.com',
                        content: text('Страница', 'Нива.Клуб', 'dark')
                    },
                    {
                        radius: 205,
                        angle: 331.2,
                        size: 108,
                        link: 'https://www.facebook.com',
                        content: text('Группа', 'Нива.Клуб', 'white', 0.9)
                    }
                ]
            },


            // niva 4x4

            {
                radius: 662,
                angle: 38.4,
                size: 122,
                content: `
                    <div class="mm-link--4x4">
                        <p><img src="images/4x4.jpg"></p>
                        <a href="https://vk.com/" target="_blank"><img src="images/vk.png"></a>
                    </div>
                `,
            },


            // youtube

            {
                radius: 466,
                angle: 52.6,
                size: 144,
                link: 'https://www.youtube.com/',
                content: image('youtube.png'),
            },


            // viber

            {
                radius: 338,
                angle: 70.4,
                size: 106,
                link: 'https://www.viber.com/',
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
                        link: 'https://vk.com/',
                        content: image('vk.png'),
                    },
                    {
                        radius: 124,
                        angle: 103.2,
                        size: 72,
                        link: 'https://web.telegram.org/',
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
                        link: 'https://web.telegram.org/',
                        content: image('telegram.png'),
                    },
                    {
                        radius: 130,
                        angle: 150,
                        size: 64,
                        link: 'https://www.viber.com/',
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
                        link: 'https://vk.com/',
                        content: image('vk.png'),
                    },
                    {
                        radius: 137,
                        angle: 111.9,
                        size: 64,
                        link: 'https://www.facebook.com',
                        content: image('facebook.png'),
                    },
                    {
                        radius: 137,
                        angle: 152.8,
                        size: 64,
                        link: 'https://www.viber.com/',
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
                        link: 'https://www.instagram.com',
                        content: image('instagram.png'),
                    },
                    {
                        radius: 248,
                        angle: 164.2,
                        size: 102,
                        link: 'https://vk.com/',
                        content: image('vk.png'),
                    },
                    {
                        radius: 192,
                        angle: 194,
                        size: 98,
                        link: 'https://www.youtube.com/',
                        content: image('youtube.png'),
                    },
                    {
                        radius: 192,
                        angle: 250,
                        size: 98,
                        link: 'https://www.youtube.com/',
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
                        link: 'https://www.instagram.com',
                        content: image('instagram.png'),
                    },
                    {
                        radius: 204,
                        angle: 153.3,
                        size: 102,
                        link: 'https://web.telegram.org/',
                        content: image('telegram.png'),
                    },
                    {
                        radius: 182,
                        angle: 193,
                        size: 102,
                        link: 'https://vk.com/',
                        content: image('vk.png'),
                    },
                    {
                        radius: 188,
                        angle: 235.7,
                        size: 108,
                        link: 'https://rozetka.com.ua/',
                        content: image('cart.png'),
                    },
                    {
                        radius: 176,
                        angle: 275.8,
                        size: 86,
                        link: 'https://www.facebook.com',
                        content: image('facebook.png'),
                    },
                    {
                        radius: 188,
                        angle: 313.6,
                        size: 84,
                        link: 'https://www.youtube.com/',
                        content: image('youtube.png')
                    }
                ]
            },


            // forum

            {
                radius: 370,
                angle: 269.4,
                size: 258,
                link: 'http://example.com/',
                content: `
                    <a class="mm-link--forum mm-link--text">
                        <img src="images/forum.png">
                        <p class="label">Форум</p>
                        <p class="title">Нива.Клуб</p>
                    </a>
                `,
            },


            // vk

            {
                radius: 450,
                angle: 310.9,
                size: 144,
                link: 'https://vk.com/',
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
                        link: 'https://web.telegram.org/',
                        content: text('Страница', 'Нива.Клуб', 'light')
                    },
                    {
                        radius: 234,
                        angle: 312.2,
                        size: 108,
                        link: 'https://web.telegram.org/',
                        content: text('Группа', 'Нива.Клуб', 'light')
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
