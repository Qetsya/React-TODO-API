import { useEffect, useState } from "react";
import { getList } from "../../services/getList";

export const useList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLoad = async () => {
    setLoading(true);
    const data = await getList();
    setLoading(false);
    setList(data.documents);
    //no return value
  };

  useEffect(() => {
    handleLoad(); //Promise<undefined>
  }, []);

  return { list, reloadData: handleLoad, loading };
};
