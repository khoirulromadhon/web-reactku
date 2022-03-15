import React from "react";

const Mhs = (props) => {
    return (
        <div className="mahasiwa">
            <div className="gambar-tumbnail">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail" />
            </div>
            <div className="list-mahasiswa">
                <div className="NIM">{props.NIM}</div>
                <div className="nama">{props.nama}</div>
                <div className="alamat">{props.alamat}</div>
                <div className="hp">{props.hp}</div>
                <div className="angkatan">{props.angkatan}</div>
                <div className="status">{props.status}</div>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}

export default Mhs;