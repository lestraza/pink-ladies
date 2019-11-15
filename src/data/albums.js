import liar from '../images/albumCovers/liar.jpg';
import paradise from '../images/albumCovers/paradise.jpg';
import airlines from '../images/albumCovers/airlines.jpg';


const albums = [
    {
        newAlbum: true,
        albumName: "SILENCE",
        yearOfIssue: '',
        url: airlines
    },
    {
        newAlbum: false,
        albumName: "PARADISE",
        yearOfIssue: 2017,
        url: paradise
    },
    {
        newAlbum: false,
        albumName: "LIAR",
        yearOfIssue: 2013,
        url: liar
    }
]

export default albums;