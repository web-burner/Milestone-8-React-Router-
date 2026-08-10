import Card from "../card/Card";

const Cards = ({data}) => {
    return (
        <div className=" w-10/12 mx-auto grid grid-cols-3 gap-5 mb-10">
            {
                data.map(singleData => <Card singleData={singleData} key={singleData.bookId} />)
            }
        </div>
    );
};

export default Cards;