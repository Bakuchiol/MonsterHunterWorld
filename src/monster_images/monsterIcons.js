const monsters = [
    {
        id: '1',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-aptonoth_icon.png'
    },
    {
        id: '2',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/3/39/MHW-Jagras_Icon.png/revision/latest?cb=20210724005620'
    },
    {
        id: '3',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-icono_mernos.png'
    },
    {
        id: '4',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-vespoid_icon2.png'
    },
    {
        id: '5',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-mosswine_icon2.png'
    },
    {
        id: '6',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-apceros_icon.png'
    },
    {
        id: '7',
        pic: 'https://i.pinimg.com/originals/3b/28/09/3b28097fe6447057b4921e1d3e4ea3d1.png'
    },
    {
        id: '8',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/d/dd/MHW-Noios_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724010253'
    },
    {
        id: '9',
        pic: 'https://static.wikia.nocookie.net/monsterhunterworld_gamepedia_en/images/c/cc/MHW_Gajau_Icon.png/revision/latest/scale-to-width-down/250?cb=20190826171455'
    },
    {
        id: '10',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kelbi_icon2.png'
    },
    {
        id: '11',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/3/3d/MHW-Raphinos_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724010437'
    },
    {
        id: '12',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/0/01/MHW-Shamos_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724010518'
    },
    {
        id: '13',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/1/11/MHW-Girros_Icon.png/revision/latest?cb=20210724005319'
    },
    {
        id: '14',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-hornetaur_icon2.png'
    },
    {
        id: '15',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9b/MHW-Gastodon_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724005241'
    },
    {
        id: '16',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7a/MHW-Barnos_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724004533'
    },
    {
        id: '17',
        pic: 'https://static.wikia.nocookie.net/monsterhunterworld_gamepedia_en/images/9/98/MHW_Great_Jagras_Icon.png/revision/latest/scale-to-width-down/250?cb=20190826171459'
    },
    {
        id: '18',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/c/ca/MHW-Kulu-Ya-Ku_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724005910'
    },
    {
        id: '19',
        pic: 'https://cdn.kiranico.net/file/kiranico/mhworld-web/mhw/icon/em102_ID.png'
    },
    {
        id: '20',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0a/MHW-Barroth_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724004639'
    },
    {
        id: '21',
        pic: 'https://static.wikia.nocookie.net/monsterhunterespanol/images/e/eb/MHW-Icono_Jyuratodus.png/revision/latest?cb=20210823122234&path-prefix=es'
    },
    {
        id: '22',
        pic: 'https://static.wikia.nocookie.net/monsterhunterespanol/images/3/30/MHW-Icono_Tobi-Kadachi.png/revision/latest?cb=20210823124001&path-prefix=es'
    },
    {
        id: '23',
        pic: 'https://static.wikia.nocookie.net/monsterhunterespanol/images/9/9e/MHW-Icono_Anjanath.png/revision/latest?cb=20210823120620&path-prefix=es'
    },
    {
        id: '24',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8e/MHW-Azure_Rathalos_Icon.png/revision/latest/scale-to-width-down/250?cb=20210723233615'
    },
    {
        id: '25',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fd/MHWI-Seething_Bazelgeuse_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724012341'
    },
    {
        id: '26',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d8/MHW-Behemoth_Icon.png/revision/latest?cb=20210724004805'
    },
    {
        id: '27',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/4/49/MHWI-Savage_Deviljho_Icon.png/revision/latest?cb=20210724012302'
    },
    {
        id: '28',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/4/47/MHW-Diablos_Icon.png/revision/latest/scale-to-width-down/250?cb=20210723233759'
    },
    {
        id: '29',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/d/dc/MHW-Black_Diablos_Icon.png/revision/latest/scale-to-width-down/250?cb=20210723233716'
    },
    {
        id: '30',
        pic: 'https://static.wikia.nocookie.net/monsterhunterworld_gamepedia_en/images/4/4c/MHW_Dodogama_Icon.png/revision/latest/scale-to-width-down/250?cb=20190826171453'
    },
    {
        id: '31',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e1/MHW-Great_Girros_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724005358'
    },
    {
        id: '32',
        pic: 'https://static.wikia.nocookie.net/monsterhunterespanol/images/5/59/MHW-Icono_Kirin.png/revision/latest?cb=20210823124926&path-prefix=es'
    },
    {
        id: '33',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ef/MHW-Kulve_Taroth_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724005957'
    },
    {
        id: '34',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e2/MHW-Kushala_Daora_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724000948'
    },
    {
        id: '35',
        pic: 'https://static.wikia.nocookie.net/monsterhunterespanol/images/e/ed/MHW-Icono_Lavasioth.png/revision/latest?cb=20210823122539&path-prefix=es'
    },
    {
        id: '36',
        pic: 'https://static.wikia.nocookie.net/monsterhunterespanol/images/2/27/MHW-Icono_Legiana.png/revision/latest?cb=20210823122620&path-prefix=es'
    },
    {
        id: '37',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e1/MHW-Lunastra_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724001103'
    },
    {
        id: '38',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/3/35/MHWI-Ruiner_Nergigante_Icon.png/revision/latest?cb=20210724012223'
    },
    {
        id: '39',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b6/MHWI-Ebony_Odogaron_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724011851'
    },
    {
        id: '40',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/0/04/MHW-Paolumu_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724010333'
    },
    {
        id: '41',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/2/23/MHW-Radobaan_Icon.png/revision/latest?cb=20210724010413'
    },
    {
        id: '42',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8c/MHW-Rathalos_Icon.png/revision/latest?cb=20210724001238'
    },
    {
        id: '43',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/3/32/MHW-Rathian_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724202821'
    },
    {
        id: '44',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/1/15/MHW-Pink_Rathian_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724001151'
    },
    {
        id: '45',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d7/MHW-Teostra_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724010546'
    },
    // no 46 or 47
    {
        id: '48',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/0/01/MHW-Tzitzi-Ya-Ku_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724010628'
    },
    {
        id: '49',
        pic: 'https://cdn.kiranico.net/file/kiranico/mhworld-web/mhw/icon/em045_ID.png'
    },
    {
        id: '50',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fb/MHW-Vaal_Hazak_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724010833'
    },
    {
        id: '51',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e3/MHW-Xeno%27jiiva_Icon.png/revision/latest?cb=20210724010915'
    },
    {
        id: '52',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/1/16/MHW-Zorah_Magdaros_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724010935'
    },
    {
        id: '53',
        pic: 'https://cdn.kiranico.net/file/kiranico/mhworld-web/mhw/icon/em127_ID.png'
    },
    {
        id: '54',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/ancient_leshen_icon.png'
    },
    {
        id: '55',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fa/MHWI-Safi%27jiiva_Icon.png/revision/latest?cb=20210724012238'
    },
    {
        id: '56',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fa/MHWI-Safi%27jiiva_Icon.png/revision/latest?cb=20210724012238'
    },
    {
        id: '57',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-rajang_icon.png'
    },
    {
        id: '58',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/0/09/MHWI-Viper_Tobi-Kadachi_Icon.png/revision/latest?cb=20210724012553'
    },
    {
        id: '59',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/2/2f/MHWI-Namielle_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724012034'
    },
    {
        id: '60',
        pic: 'https://static.wikia.nocookie.net/monsterhunter/images/9/90/MHWI-Zinogre_Icon.png/revision/latest/scale-to-width-down/250?cb=20210724012701'
    }
]

module.exports = monsters