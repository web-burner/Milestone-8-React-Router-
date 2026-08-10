import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MarkAsRead from "./markAsRead/MarkAsRead";
import WishList from "./WishList/WishList";
import { useLoaderData } from "react-router";

const DisplayStoredBooks = () => {
  let booksData = useLoaderData().data;

  return (
    <Tabs className={" mt-5 w-11/12 mx-auto"}>
      <TabList>
        <Tab>Mark as Read</Tab>
        <Tab>WishList Books</Tab>
      </TabList>

      <TabPanel>
        <MarkAsRead booksData={booksData} />
      </TabPanel>
      <TabPanel>
        <WishList booksData={booksData}></WishList>
      </TabPanel>
    </Tabs>
  );
};

export default DisplayStoredBooks;
