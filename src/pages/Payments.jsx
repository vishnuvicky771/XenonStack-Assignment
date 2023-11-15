import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function Payments() {
  const currentUser = useSelector(selectCurrentUser);
  const [paymentData, setPaymentData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPaymentHistory() {
      try {
        setLoading(true);
        const temp = collection(db, "payments");
        const documents = await getDocs(temp);
        const newData = await documents?.docs
          ?.map((doc, idx) => ({
            ...doc.data(),
            id: doc.id,
            index: idx + 1,
          }))
          ?.map((item) => {
            return { ...item, date: new Date(item?.date)?.toDateString() };
          })
          ?.filter((item) => item?.email === currentUser?.email)
          ?.sort(
            (a, b) =>
              new Date(a?.date)?.getTime() < new Date(b?.date)?.getTime()
          );
        console.log(newData);
        setPaymentData(newData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    if (currentUser !== null) getPaymentHistory();
    else setLoading(false);
  }, [currentUser]);

  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Stack alignItems={"center"} gap={2} width={"90%"} maxWidth={"400px"}>
          <Typography sx={{ fontSize: 20, fontWeight: 550 }}>
            Payment History
          </Typography>
          <DataGrid
            sx={{ width: "100%" }}
            columns={[
              {
                field: "index",
                renderHeader: () => {
                  return <Typography variant="h6">No</Typography>;
                },
                maxWidth: 50,
                renderCell: (params) => {
                  <Typography fontSize={18}>{params.row.idx}</Typography>;
                },
              },
              {
                field: "date",
                renderHeader: () => {
                  return <Typography variant="h6">Date</Typography>;
                },
                flex: 1,
                maxWidth: 250,
                renderCell: (params) => {
                  <Typography fontSize={18}>
                    {new Date(params.row?.date)?.toDateString()}
                  </Typography>;
                },
              },
              {
                field: "price",
                renderHeader: () => {
                  return <Typography variant="h6">Amount Paid</Typography>;
                },
                flex: 1,
                maxWidth: 150,
                renderCell: (params) => {
                  <Typography>{params.row.price}</Typography>;
                },
              },
            ]}
            rows={paymentData}
            disableRowSelectionOnClick
          />
        </Stack>
      )}
    </Stack>
  );
}

export default Payments;
