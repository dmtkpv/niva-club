const DATA = (() => {

    function image (key) {
        return `<img src="/images/${key}">`
    }

    function text (label, title) {
        return `<p class="label">${label}</p><p class="title">${title}</p>`
    }

    return [
        {
            radius: 0,
            angle: 0,
            scale: 1,
            size: 380,
            content: image('logo.png'),

            children: [
                {
                    radius: 410,
                    angle: 2,
                    scale: 0.37,
                    size: 140,
                    content: image('instagram.png'),
                },
                {
                    radius: 521,
                    angle: 23.6,
                    scale: 0.43,
                    content: image('facebook.png'),
                    children: [
                        {
                            radius: 479,
                            angle: 26.6,
                            scale: 0.65,
                            content: text('Страница', 'Нива.Клуб'),
                        },
                        {
                            radius: 476,
                            angle: 331.2,
                            scale: 0.58,
                            content: text('Группа', 'Нива.Клуб'),
                        }
                    ]
                },
                // {
                //     radius: 662,
                //     angle: 38.4,
                //     scale: 0.32,
                //     content: image('facebook.png'),
                // },
                // {
                //     radius: 466,
                //     angle: 52.6,
                //     scale: 0.38,
                //     content: image('facebook.png'),
                // },
                // {
                //     radius: 338,
                //     angle: 70.4,
                //     scale: 0.28,
                //     content: image('facebook.png'),
                // },
                // {
                //     radius: 352,
                //     angle: 98.8,
                //     scale: 0.4,
                //     content: image('facebook.png'),
                //     children: [
                //         {
                //             radius: 342,
                //             angle: 47.6,
                //             scale: 0.46,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 310,
                //             angle: 103.2,
                //             scale: 0.47,
                //             content: image('facebook.png'),
                //         }
                //     ]
                // },
                // {
                //     radius: 345,
                //     angle: 129.8,
                //     scale: 0.35,
                //     content: image('facebook.png'),
                //     children: [
                //         {
                //             radius: 342,
                //             angle: 95.4,
                //             scale: 0.41,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 373,
                //             angle: 150,
                //             scale: 0.48,
                //             content: image('facebook.png'),
                //         },
                //     ]
                // },
                // {
                //     radius: 610,
                //     angle: 145.6,
                //     scale: 0.36,
                //     content: image('facebook.png'),
                //     children: [
                //         {
                //             radius: 392,
                //             angle: 65.4,
                //             scale: 0.42,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 380,
                //             angle: 111.9,
                //             scale: 0.46,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 380,
                //             angle: 152.8,
                //             scale: 0.47,
                //             content: image('facebook.png'),
                //         },
                //     ]
                // },
                // {
                //     radius: 454,
                //     angle: 169,
                //     scale: 0.5,
                //     content: image('facebook.png'),
                //     children: [
                //         {
                //             radius: 368,
                //             angle: 133.6,
                //             scale: 0.49,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 496,
                //             angle: 164.2,
                //             scale: 0.53,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 385,
                //             angle: 194,
                //             scale: 0.52,
                //             content: image('facebook.png'),
                //         },
                //     ]
                // },
                // {
                //     radius: 478,
                //     angle: 209.7,
                //     scale: 0.58,
                //     content: image('facebook.png'),
                //     children: [
                //         {
                //             radius: 304,
                //             angle: 117,
                //             scale: 0.34,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 352,
                //             angle: 153.3,
                //             scale: 0.46,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 315,
                //             angle: 193,
                //             scale: 0.46,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 324,
                //             angle: 235.7,
                //             scale: 0.49,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 303,
                //             angle: 275.8,
                //             scale: 0.39,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 323,
                //             angle: 313.6,
                //             scale: 0.38,
                //             content: image('facebook.png'),
                //         }
                //     ]
                // },
                // {
                //     radius: 370,
                //     angle: 269.4,
                //     scale: 0.68,
                //     content: image('facebook.png'),
                // },
                // {
                //     radius: 450,
                //     angle: 310.9,
                //     scale: 0.38,
                //     content: image('facebook.png'),
                // },
                // {
                //     radius: 419,
                //     angle: 337.3,
                //     scale: 0.39,
                //     content: image('facebook.png'),
                //     children: [
                //         {
                //             radius: 593,
                //             angle: 0.7,
                //             scale: 0.73,
                //             content: image('facebook.png'),
                //         },
                //         {
                //             radius: 599,
                //             angle: 312.2,
                //             scale: 0.73,
                //             content: image('facebook.png'),
                //         }
                //     ]
                // }

            ]
        }
    ]

})();
