import React, { useState } from "react";
import initialBooks from "../utils/books";

export default function BookList() {
  // Gunakan useState untuk menyimpan dan mengubah daftar buku
  const [books, setBooks] = useState(initialBooks);

  // Fungsi untuk menambah buku baru
  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru yang Keren",
      author: "Mahasiswa Hebat",
      year: new Date().getFullYear(),
      description: "Buku ini adalah hasil dari tugas React yang seru.",
      image: `https://picsum.photos/200/300`,
    };
    // Tambahkan buku baru ke dalam state
    setBooks([...books, newBook]);
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">Daftar Buku</h1>
      <div className="row g-4">
        {books.map((book) => (
          <div key={book.id} className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top mx-auto mt-3"
                style={{ height: "300px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-secondary mb-1">
                  oleh {book.author} ({book.year})
                </p>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddBook}
        className="btn btn-primary mt-4 align-self-center"
      >
        Tambah Buku Baru
      </button>
    </div>
  );
}
