import * as React from "react";
import { useAuth } from "@clerk/clerk-react";

import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../../interface/UrlData";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import DataTable from "../DataTable/DataTable";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);
  const { getToken } = useAuth();

  const updateReloadState = (): void => {
    setReload(true);
  };
  const fetchTableData = async () => {
    const token = await getToken();
    const response = await axios.get(`${serverUrl}/shortUrl`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        mode: "cors",
      },
    });
    console.log("The response from server is: ", response);
    setData(response.data);
    setReload(false);
    // console.log("Data: ", data)
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);

  return (
    <>
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
    </>
  );
};

export default Container;