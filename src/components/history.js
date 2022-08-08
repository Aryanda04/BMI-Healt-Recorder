// import {auth} from '../firebase'

const History = () => {
    const riwayatPengukuran = [
        {
            nama: 'Andika',
            umur:'80',
            beratBadan: '30',
            tinggiBadan:'200'
        },
        {
            nama: 'Andikaa',
            umur:'801',
            beratBadan: '30',
            tinggiBadan:'200'
        },
        {
            nama: 'Andikaaa',
            umur:'802',
            beratBadan: '30324',
            tinggiBadan:'204320'
        },
    ]
    return (
        <>
    <div>HISTORY PAGE</div>;
    <section className="riwayatPengukuran">

    {
        riwayatPengukuran.map((item) => (
            <div className="riwayatCard">
                            <h2 >
                                {item.nama}
                            </h2>
                            <h2>
                                {item.umur}
                            </h2>
                            <div className=''>
                                {item.beratBadan}
                                <br></br>
                                {item.tinggiBadan}
                            </div>
                        </div>
                    ))
                }
    {/* <button onClick={()=>auth.signOut()}>Logout</button> */}
                </section>
        </>
    )

};

export default History;