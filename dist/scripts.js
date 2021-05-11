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
        content: `
            <a class="mm-link--root mm-link--image">
                <img src="images/logo.png">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432.3 432.3">
                  <g>
                    <path d="M88.8,93.68a9.92,9.92,0,0,1-5-1.34L58.26,77.6a10,10,0,1,1,10-17.32L93.81,75a10,10,0,0,1-5,18.66Z"/>
                    <path d="M121.16,61.34a10,10,0,0,1-8.67-5L97.75,30.79a10,10,0,0,1,17.32-10l14.74,25.55a10,10,0,0,1-8.65,15Z"/>
                    <path d="M165.34,49.5a10,10,0,0,1-10-10V10a10,10,0,0,1,20,0V39.5A10,10,0,0,1,165.34,49.5Z"/>
                    <path d="M209.52,61.34a10,10,0,0,1-8.65-15l14.74-25.55a10,10,0,1,1,17.32,10L218.19,56.34A10,10,0,0,1,209.52,61.34Z"/>
                    <path d="M241.88,93.68a10,10,0,0,1-5-18.66l25.55-14.74a10,10,0,1,1,10,17.32L246.87,92.34A9.92,9.92,0,0,1,241.88,93.68Z"/>
                    <path d="M88.8,93.68a9.92,9.92,0,0,1-5-1.34L58.26,77.6a10,10,0,1,1,10-17.32L93.81,75a10,10,0,0,1-5,18.66Z"/>
                    <path d="M121.16,61.34a10,10,0,0,1-8.67-5L97.75,30.79a10,10,0,0,1,17.32-10l14.74,25.55a10,10,0,0,1-8.65,15Z"/>
                    <path d="M165.34,49.5a10,10,0,0,1-10-10V10a10,10,0,0,1,20,0V39.5A10,10,0,0,1,165.34,49.5Z"/>
                  </g>
                  <path d="M165.2,83.88c12.4,0,24.25,9.44,24.25,21.19,0,.05-.07,89.86-.08,112,0,.05,0,.09,0,.13v4.62a4,4,0,1,0,8,0v-1.19a24.47,24.47,0,0,1,48.93.4l0,17.72a3.93,3.93,0,1,0,7.85,0v-1c0-12.3,12-20.89,24.26-20.89a24.43,24.43,0,0,1,24.42,24.47l.05,17.93a3.82,3.82,0,0,0,7.64,0l0-1.36c0-11.19,12.11-19.77,24-19.77A24.48,24.48,0,0,1,359,262.55l.08,45c0,41.82-16.26,104.79-116.37,104.79-119.31,0-135.22-60.48-133.38-125.64.44-15.72,13.95-25,25-25v28.82c0,3.63,2.51,4,3.26,4s3.18-.41,3.18-4V108.36A24.48,24.48,0,0,1,165.2,83.88m0-20a44.52,44.52,0,0,0-44.47,44.48V243.93c-16.37,5.47-30.83,20.59-31.44,42.16-.94,33.76,1.82,76.47,31.9,107.4,25.39,26.12,65.13,38.81,121.48,38.81,50.68,0,88.17-14.91,111.41-44.31,16.33-20.65,25-48.48,25-80.48l-.08-45a44.51,44.51,0,0,0-44.47-44.43A47.19,47.19,0,0,0,318,221.14a44.47,44.47,0,0,0-39.6-24.34A47.21,47.21,0,0,0,261,200.07a44.58,44.58,0,0,0-51.64-21.81c0-4.15,0-8.4,0-12.67l0-41.45c0-11.29,0-16.44,0-19.07h0c0-22.32-20.27-41.19-44.25-41.19Z"/>
                </svg>
            </a>        
        `,

        children: [


            // instagram

            {
                radius: 410,
                angle: 2,
                size: 140,
                link: 'https://www.instagram.com/nivaclubnet',
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
                        link: 'https://www.facebook.com/nivaclubnet',
                        content: text('Страница', 'Нива.Клуб', 'dark')
                    },
                    {
                        radius: 205,
                        angle: 331.2,
                        size: 108,
                        link: 'https://www.facebook.com/groups/nivaclubnet',
                        content: text('Сообщество', 'Нива.Клуб', 'white', 0.9)
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
                link: 'https://www.youtube.com/channel/UCrFypXn-Nplf2MK1pNyIgGw',
                content: image('youtube.png'),
            },


            // viber

            {
                radius: 338,
                angle: 70.4,
                size: 106,
                link: 'https://invite.viber.com/?g2=AQAQyF3292U6kkq9ekHE5VZCjlI4YT9bb7UqVrp7z%2FHH7wuVj2eHvnSdg%2F%2F2A26D&lang=ru',
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
                        link: 'https://vk.com/4x4ab',
                        content: image('vk.png'),
                    },
                    {
                        radius: 137,
                        angle: 111.9,
                        size: 64,
                        link: 'https://www.facebook.com/groups/4x4ab/',
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
                        link: 'https://www.instagram.com/nivaclubteam/',
                        content: image('instagram.png'),
                    },
                    {
                        radius: 248,
                        angle: 164.2,
                        size: 102,
                        link: 'https://vk.com/nivaclubteam',
                        content: image('vk.png'),
                    },
                    {
                        radius: 192,
                        angle: 194,
                        size: 98,
                        link: 'https://www.youtube.com/channel/UCG-UMbYjTF3Acy9efy6J4xQ',
                        content: image('youtube.png'),
                    },
                    {
                        radius: 192,
                        angle: 235,
                        size: 98,
                        link: 'https://t.me/nivaclubteam',
                        content: image('telegram.png'),
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
                        link: 'https://www.instagram.com/nivashopnet',
                        content: image('instagram.png'),
                    },
                    {
                        radius: 204,
                        angle: 153.3,
                        size: 102,
                        link: 'https://t.me/nivashopnet',
                        content: image('telegram.png'),
                    },
                    {
                        radius: 182,
                        angle: 193,
                        size: 102,
                        link: 'https://vk.com/nivashopnet',
                        content: image('vk.png'),
                    },
                    {
                        radius: 188,
                        angle: 235.7,
                        size: 108,
                        link: 'http://niva-shop.net',
                        content: image('cart.png'),
                    },
                    {
                        radius: 176,
                        angle: 275.8,
                        size: 86,
                        link: 'https://www.facebook.com/nivashopnet',
                        content: image('facebook.png'),
                    },
                    {
                        radius: 188,
                        angle: 313.6,
                        size: 84,
                        link: 'https://www.youtube.com/channel/UCF6nYUvT_nbFL2Vs9e0WrUw?',
                        content: image('youtube.png')
                    }
                ]
            },


            // forum

            {
                radius: 370,
                angle: 269.4,
                size: 258,
                link: 'https://niva-club.net/',
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
                link: 'https://vk.com/nivaclubnet',
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
                        link: 'https://t.me/lada4x4',
                        content: text('Страница', 'Нива.Клуб', 'light')
                    },
                    {
                        radius: 234,
                        angle: 312.2,
                        size: 108,
                        link: 'https://t.me/nivaclubnet',
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
