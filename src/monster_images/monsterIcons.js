const monsters = [
    {
        id: '1',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-aptonoth_icon.png'
    },
    {
        id: '2',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-jagras_icon2.png'
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
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-noios_icon2.png'
    },
    {
        id: '9',
        pic: 'https://i.pinimg.com/originals/e4/d5/62/e4d5626b78c624f24d23a9d8cf234eb8.png'
    },
    {
        id: '10',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kelbi_icon2.png'
    },
    {
        id: '11',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-raphinos_icon2.png'
    },
    {
        id: '12',
        pic: 'https://i.pinimg.com/originals/3f/5c/86/3f5c8680d0a4f0fb02bd3a129b7cfaf3.png'
    },
    {
        id: '13',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_girros_icon2.png'
    },
    {
        id: '14',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-hornetaur_icon2.png'
    },
    {
        id: '15',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-gastodon_icon.png'
    },
    {
        id: '16',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-barnos_icon2.png'
    },
    {
        id: '17',
        pic: 'https://i.pinimg.com/originals/72/51/b6/7251b65f3934e3cae0348eadc302fb65.png'
    },
    {
        id: '18',
        pic: 'https://i.pinimg.com/originals/6b/17/8e/6b178ed93f7e2131b756374ebac7f7d3.png'
    },
    {
        id: '19',
        pic: 'https://cdn.kiranico.net/file/kiranico/mhworld-web/mhw/icon/em102_ID.png'
    },
    {
        id: '20',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/MHW-Barroth_Icon.png'
    },
    {
        id: '21',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-jyuratodus_icon.png'
    },
    {
        id: '22',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-tobi-kadachi_icon.png'
    },
    {
        id: '23',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-anjanath_icon.png'
    },
    {
        id: '24',
        pic: 'https://i.pinimg.com/originals/a7/8e/29/a78e292c85ac9f72c9ae41e88845c824.png'
    },
    {
        id: '25',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-seething_bazelgeuse_icon.png'
    },
    {
        id: '26',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-behemoth_icon.png'
    },
    {
        id: '27',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-savage_deviljho_icon.png'
    },
    {
        id: '28',
        pic: 'https://i.pinimg.com/originals/3d/f7/f9/3df7f9d65722458ecfb6c9f6be3f5d55.png'
    },
    {
        id: '29',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-black_diablos_icon.png'
    },
    {
        id: '30',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-dodogama_icon.png'
    },
    {
        id: '31',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_girros_icon2.png'
    },
    {
        id: '32',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kirin_icon.png'
    },
    {
        id: '33',
        pic: 'https://i.pinimg.com/originals/da/75/3e/da753e78b21052e5c1c14a4b0f6ca246.png'
    },
    {
        id: '34',
        pic: 'https://i.pinimg.com/originals/f8/c8/1c/f8c81c496f9fbdba7e467d965b4ecf57.png'
    },
    {
        id: '35',
        pic: 'https://i.pinimg.com/originals/e8/cf/11/e8cf11196a07e5f31f1dc08cc4e048af.png'
    },
    {
        id: '36',
        pic: 'https://i.pinimg.com/originals/7f/48/2f/7f482fa147f0635483785582a936a284.png'
    },
    {
        id: '37',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-lunastra_icon2.png'
    },
    {
        id: '38',
        pic: 'https://i.pinimg.com/originals/3c/e8/c8/3ce8c8f2720cd9588efc01d62a9f5ce4.png'
    },
    {
        id: '39',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-odogaron_icon.png'
    },
    {
        id: '40',
        pic: 'https://i.pinimg.com/originals/82/b6/00/82b600ce1f899385e1a8097227dbae88.png'
    },
    {
        id: '41',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-radobaan_icon.png'
    },
    {
        id: '42',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-rathalos_icon.png'
    },
    {
        id: '43',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-rathian_icon.png'
    },
    {
        id: '44',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-pink_rathian_icon2.png'
    },
    {
        id: '45',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-teostra_icon.png'
    },
    // no 46 or 47
    {
        id: '48',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-tzitzi-ya-ku_icon2.png'
    },
    {
        id: '49',
        pic: 'https://cdn.kiranico.net/file/kiranico/mhworld-web/mhw/icon/em045_ID.png'
    },
    {
        id: '50',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-vaal_hazak_icon.png'
    },
    {
        id: '51',
        pic: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-xeno'jiiva_icon.png"
    },
    {
        id: '52',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-zorah_magdaros_icon.png'
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
        pic: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-safi'jiiva_icon.png"
    },
    {
        id: '56',
        pic: 'https://pbs.twimg.com/media/EBOui09W4AEhULw.jpg'
    },
    {
        id: '57',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-rajang_icon.png'
    },
    {
        id: '58',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhwi-viper_tobi-kadachi_icon.png'
    },
    {
        id: '59',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhwi-namielle_icon.png'
    },
    {
        id: '60',
        pic: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-zinogre_icon.png'
    }
]

module.exports = monsters