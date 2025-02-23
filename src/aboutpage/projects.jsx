export default function Projects() {
  return (
    <div className="container ">
      <hr />
      <div className="row project">
        <h2 className="my-5">Projects</h2>
        <h3>Netflix clone</h3>
        <ul>
          <li>
            Designed and developed a full-stack Netflix clone, replicating core
            functionalities such as browsing, adding, updating, and deleting
            titles.
          </li>
          <li>
            Implemented a responsive front-end using JavaScript, HTML, and CSS.
          </li>
          <li>Built a robust back-end with Node.js, and MongoDB</li>
          <li>
            <a href="https://raunak94.github.io/netflix-clone/" target="_blank">
              Github
            </a>
          </li>
        </ul>

        <h3 className="mt-5">Lyrics Now</h3>
        <ul>
          <li>
            Designed and developed a python software that automatically
            retrieves lyrics for the currently playing song by integrating with
            music player APIs and online lyric databases.
          </li>

          <li>
            <a
              href="https://github.com/Raunak94/Playing_songs_and_fetch_lyrics"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}
