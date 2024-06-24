// SC BY © VYNAA CHAN
// RECODE WAJIB KASI CREDITS 
// WA: https://s.id/Vynaa
// TOKO KEBUTUHAN BOT TERPERCAYA
// HANYA DI SINI
// https://linkbio.co/VLShop
// https://t.me/VynaaMD
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285725254154', '@ojiwzrd_', true],
['6285725254154', '@ojiwzrd_', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285725254154'
global.packname = 'Made With'
global.author = '© Yaemiko MD'
global.namebot = 'Yaemiko MD'
global.wm = '© Yaemiko MD'
global.stickpack = 'Made With'
global.stickauth = '© Yaemiko MD'
global.fotonya = 'https://telegra.ph/file/82848e4f795d07b936076.jpg'
// Link Sosmed
global.sig = 'https://instagram.com/ojiwzrd_'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/DDaUiqrYUDU8qqsrz1sKH4'
// Payment
global.ovo = '-'
global.gopay = '-'
global.dana = '085725254154'
// Info Wait
global.alya = 'Mwuhehe'
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.APIs = {
    anu : 'anu.tv'
}

/*Apikey*/
global.APIKeys = {
    "anu.tv": "anu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})