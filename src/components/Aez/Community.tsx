import React from "react";
import Section from "../Layout/Section";
import CustomTable from "../DataDisplay/CustomTable";
import communityCalls from "../../config/communityCalls.json";
import { Flex } from "@chakra-ui/react";
// import { communityCalls } from "../../utils/constant";

const keys = ["Topic", "Tags", "Date", "Twitter Spaces"];
const data = [
  {
    Topic: "Neutron and Duality Merger",
    Tags: ["Atom Zone #13"],
    Date: "Aug 22, 2023",
    "Twitter Spaces": "Atom Zone #13",
  },
  // {
  //   Topic: "Neutron and Duality Merger",
  //   Tags: ["Atom Zone #13"],
  //   Date: "Aug 22, 2023",
  //   "Twitter Spaces": "Atom Zone #13",
  // },
  // {
  //   Topic: "Neutron and Duality Merger",
  //   Tags: ["Atom Zone #13"],
  //   Date: "Aug 22, 2023",
  //   "Twitter Spaces": "Atom Zone #13",
  // },
];

const Community = () => {
  return (
    <Flex gap="50px" mx={"auto"}>
    <Section width="540px" heading="Atom Zone Community Calls" subtitle="Stay up to date">
      <CustomTable
        keys={Object.keys(communityCalls[0])}
        data={communityCalls.reverse()}
        minGridWidth="150px"
        pagination={true}
        color="#bfbfbfcc"
      />
    </Section>
    <Section width="540px" heading="Atom Zone Agora Calls" subtitle="A gathering place to address the topics shaping the ATOM Ecosystem">
      <CustomTable
        keys={Object.keys(communityCalls[0])}
        data={communityCalls.reverse()}
        minGridWidth="150px"
        pagination={true}
        color="#bfbfbfcc"
      />
    </Section>
    </Flex>
  );
};

export default Community;
