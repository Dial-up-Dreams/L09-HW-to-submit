import featImg from "../assets/img.main.jpg";


export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="SOI RP students chatting"
      />

      <h1>{title}</h1>
      <p>
       
      </p>
    </div>
  );
}
