import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";

export default function shop() {

    const { alldata, loading } = useFetchData('/api/shops');

    const publishdata = alldata.filter(ab => ab.status === 'publish');


    const createdAtDate = alldata && alldata[0]?.createdAt ? new Date(alldata && alldata[0]?.createdAt) : null;

    // Function to format the date as "20 May 2024 14:11 pm"
    const formatDate = (date) => {
        // Check if date is valid
        if (!date || isNaN(date)) {
            return ''; // or handle the error as needed
        }

        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour12: true // Use 12-hour format
        };

        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    // Usage example:
    const formattedDate = formatDate(createdAtDate);
    console.log(formattedDate); // Outputs something like "20 May 2024 14:11 pm" if createdAtDate is valid


    return <>

        <Head>
            <title>Shop</title>
        </Head>
        <div className="shoppage">
            <div className="shoppagetoptitle">
                <div className="container">
                    <h3>SHOP ONLINE</h3>
                    <h2>OUR PRODUCTS</h2>
                </div>
            </div>
            <div className="shopproducts">
                <div className="container">
                    <div className="shopprocards">
                        {loading ? <Spinner /> : <>
                            {publishdata.map((pro) => {
                                return <Link href={`/shop/${pro.slug}`} className="spprocard" key={pro._id}>
                                    <div className="spprocardimg">
                                        <img src={pro.images[0]} alt={pro.title} />
                                    </div>
                                    <div className="spprocinfo">
                                        <h2>{pro.title}</h2>
                                        <h3>{pro.price}</h3>
                                        <div className="spprotags">
                                            {pro.tags.map((tag) => {
                                                return <span key={tag}>{tag}</span>
                                            })}
                                        </div>
                                        <p>{formatDate(createdAtDate)}</p>
                                    </div>
                                </Link>
                            })}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    </>
}