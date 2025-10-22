import { use, useState } from 'react'
import './App.css'



function App() {
  const [displaym, setDisplay] = useState(false)
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "Tafsiri Hilol",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      img: "https://tovar.uz/images/company/444/tovar/78191/61b9acc871bb9.jpg",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibining fojiali sevgi qissasi atrofida ifodalangan."
    },
    {
      id: 2,
      name: "Ijtimoiy Odoblar",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      img: "https://assets.asaxiy.uz/product/items/desktop/47bb5999ce21178c9ae7a79bc627b5022020110614554415747oOhhyQ91ME.jpg.webp",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibining fojiali sevgi qissasi atrofida ifodalangan."
    },
    {
      id: 3,
      name: "Ulamolar Nazdida Vaqtning Qadri",
      author: "AbdulFattoh Abu G‘udda",
      img: "https://images.uzum.uz/cp6o7jvj2e4qlbiss64g/original.jpg",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibining fojiali sevgi qissasi atrofida ifodalangan."
    },
    {
      id: 4,
      name: "Oltin Silsila",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      img: "https://olcha.uz/image/700x700/products/2022-02-15/oltin-silsila-saiul-bukhori-tli-tplami-8-zhuz-36862-0.jpeg",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibining fojiali sevgi qissasi atrofida ifodalangan."
    },
    {
      id: 5,
      name: "Ikki Eshik Orasi",
      author: "Abdulla Qodiriy",
      img: "https://upload.wikimedia.org/wikipedia/uz/6/6d/Ikki_eshik_orasi.jpg",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibining fojiali sevgi qissasi atrofida ifodalangan."
    },
    {
      id: 6,
      name: "O‘tkan Kunlar",
      author: "Abdulla Qodiriy",
      img: "https://upload.wikimedia.org/wikipedia/uz/8/81/O%CA%BBtgan_kunlar.jpg",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibining fojiali sevgi qissasi atrofida ifodalangan."
    },
    {
      id: 7,
      name: "O‘tkan Kunlar",
      author: "Abdulla Qodiriy",
      img: "https://upload.wikimedia.org/wikipedia/uz/8/81/O%CA%BBtgan_kunlar.jpg",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibining fojiali sevgi qissasi atrofida ifodalangan."
    },
    {
      id: 8,
      name: "O‘tkan Kunlar",
      author: "Abdulla Qodiriy",
      img: "https://upload.wikimedia.org/wikipedia/uz/8/81/O%CA%BBtgan_kunlar.jpg",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibining fojiali sevgi qissasi atrofida ifodalangan."
    }
  ])

  return (
    <>
      <h1>My books</h1>

      <button className='btn' onClick={() => { setDisplay(true) }} >Add Book</button>


      <div className='wrapper'>
        {books.map((book) => {
          return (
            <div className='div' >
              <img src={book.img} alt="" />
              <div>
                <h2 className='name'>{book.name}</h2>
                <p className='author'>{book.author}</p>
                <p className='p2'>{book.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className='dsp' style={{ display: displaym ? 'block' : 'none' }} >

                         <h2>X</h2>

      </div>






    </>
  )
}

export default App
