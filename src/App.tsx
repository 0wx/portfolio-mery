import "./App.css"
import files from "./lib/files.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
function App() {
  return (
    <div className="text-black bg-white min-h-screen">
      <header className="flex h-90vh">
        <div className="absolute font-caveat z-30 text-position">
          <h1 className="md:text-8xl text-6xl drop-shadow-md">Welcome</h1>
          <h1 className="md:text-6xl text-4xl drop-shadow-md">To The World</h1>
          <h1 className="md:text-4xl text-2xl drop-shadow-md">
            Where cuteness Rules!
          </h1>
        </div>
        <img
          className="absolute z-2 rounded shadow-md image-position"
          src="/profile.jpg"
          alt="profile"
        />

        <div className="absolute top-vh w-full flex justify-center items-center md:gap-10 gap-5">
          <a href="https://instagram.com/mpart1919">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#444" />
          </a>
          <a href="https://twitter.com/mpart_1919">
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#444" />
          </a>
          <a href="https://fiverr.com/mpart1919">
            <img className="h-8 opacity-75" src="/fiverr.png" alt="profile" />
          </a>
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
        {files.map((url, i) => {
          return (
            <img className="image-post" src={url} alt={i.toString()} key={i} />
          )
        })}
      </section>
      <footer className="footer h-30 flex flex-col justify-center items-center pb-10">
        <img
          className="rounded ttd-position h-40"
          src="/ttd.png"
          alt="profile"
        />
        <div className="font-caveat drop-shadow-md">
          &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default App
