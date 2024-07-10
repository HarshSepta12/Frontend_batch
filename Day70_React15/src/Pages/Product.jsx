import React from "react";

const Home = () => {
  let arr = [
    {
      id: "1",
      title: "iPhone 15 Pro",
      description: "Apple top phone",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouynk1Nu-ii7w8AWS8GuYYkiWx3hSkVfTnQ&s",
    },

    {
      id: "2",
      title: "Sony Xperia",
      description: "SOny top phone",
      Image:
        "https://cdn.dxomark.com/wp-content/uploads/medias/post-32322/sonyxperia1.jpeg",
    },

    {
      id: "3",
      title: "Samsung S24 Ultra",
      description: "Samsung top phone",
      Image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-539573347?$650_519_PNG$",
    },
  ];
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
        width: "600px",
        margin: "auto",
      }}
    >
      {arr.map((data) => (
        <div key={data.id}
        style={{
          margin: "10px",
          padding:"10px",
          border: "2px solid yellow",
          backgroundColor: "green",
        }}>
          <img
            src={data.Image}
            alt=""
            style={{
              width: "250px",
             
              
            }}
          />
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
