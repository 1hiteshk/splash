import { useEffect } from "react";
import Section from "../Layout/Section";
import { Box, Button, Center, Spinner, Stack, Text } from "@chakra-ui/react";
import CustomTable from "../DataDisplay/CustomTable";
import { useAez } from "../../hooks/useAez";
import { useRecoilValue } from "recoil";
import { ecosystemState } from "../../context/ecosystemState";
import EcoCards from "./EcoCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Ecosystem = () => {
  const { getParsedEcosystemData } = useAez();
  const { data } = useRecoilValue(ecosystemState);

  useEffect(() => {
    if (!data || !data.length) getParsedData();
  }, []);

  const getParsedData = async () => {
    const data = await getParsedEcosystemData();
  };
  console.log(data);
  
  return (
    <Section
      backGroundColor="#17131e"
      heading="Ecosystem"
      subtitle="Dapps you might find interesting"
    >
      <Stack>
        {data && data.length ? (
          // <CustomTable
          //   keys={data && Object.keys(data[0])}
          //   data={data}
          //   minGridWidth="80px"
          //   maxGridWidth="100px"
          //   gridColumnGap="0px"
          // />
          // {data.map((dataItem) => (
          //   <EcoCards data={dataItem} keys={Object.keys(dataItem)} />
          // ))}
          <>
            <EcoCards keys={data && Object.keys(data[0])} data={data} />
            {/* {data.map((dataItem) => (
              <EcoCards data={dataItem} keys={dataItem && Object.keys(dataItem) } />
            ))} */}

            <Box>
            <Button background={"transparent"}  color={"#b3b3b3"} _hover={{outline: "none"}}>
              <Text fontSize={"14px"} width={"90px"} alignItems={"center"} justifyContent={"center"}>More Dapps <FontAwesomeIcon icon={faAngleDown} /></Text>
            </Button>
            </Box>
          </>
        ) : (
          <Center>
            <Spinner />
          </Center>
        )}
      </Stack>
    </Section>
  );
};

export default Ecosystem;
