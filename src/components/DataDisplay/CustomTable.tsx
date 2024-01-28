import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ColorTag from "./ColorTag";
import {
  commonTagColorMap,
  scrollbarStyle,
  thinScrollbarStyle,
} from "../../utils/constant";
import { Link as PathLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import TableTagGroup from "./table-helpers/TableTagGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const CustomTable = ({
  data,
  keys,
  totalValue,
  minGridWidth,
  maxGridWidth,
  gridColumnGap,
  itemsPerPage = 10,
  pagination,
}: any) => {
  const currentPage = useRef(1);
  const totalPages = useRef(Math.ceil(data?.length / itemsPerPage) || 0);
  const [currentItems, setCurrentItems] = useState(data);

  useEffect(() => {
    if (!pagination) return;
    setCurrentItems(data.slice(0, itemsPerPage));
    totalPages.current = Math.ceil(data?.length / itemsPerPage) || 0;
  }, [data]);

  const handlePageClick = (page: number) => {
    currentPage.current = page;
    const newOffset = ((page - 1) * itemsPerPage) % data.length;

    const endOffset = newOffset + itemsPerPage;
    const currentItems = data.slice(newOffset, endOffset);
    setCurrentItems(currentItems);
  };
  console.log(keys);

  return (
    <TableContainer textAlign={"left"} overflowX="hidden">
      <Table width={"100%"} fontSize={"lg"}>
        {/* <TableCaption>Data fetched from different chains</TableCaption> */}
        <Thead fontSize={"1.2rem"}>
          <Tr>
            {keys?.map((item: string) => {
              if (item === "Prop Date") return;
              if (item === "Tags") return;
              if (item === "Date") return;
              return (
                <Th
                  key={item}
                  width={"200px"}
                  pb={"30px"}
                  borderBottom={"1px solid"}
                  borderColor={"gray.400"}
                  color={"#fff"}
                  pl={"0"}
                >
                  <Text
                    // borderLeft={"1px solid"}
                    // borderColor={"gray"}
                    py={"10px"}
                    px={"4px"}
                    width={"100%"}
                  >
                    {item}{" "}
                    {item === "Forum Date" && (
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        height="7px"
                        width="10px"
                      />
                    )}
                  </Text>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {currentItems?.map((item: any) => {
            // console.log(currentItems);
            console.log(item);

            return (
              <Tr
                // borderTop={"1px solid gray"}
                borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}
              >
                {item &&
                  Object.values(item)?.map((value: any) => {
                    if (value === item["Prop Date"]) return; // to not show the Prop Date in Consumer chains table
                    if (keys[3] === "Twitter Space") {
                      if (value?.data?.length === 1) return; // to not show hash tags in community calls
                    }
                    if (value === item.Date) return; // to not show date in community calls
                    console.log(value?.data);

                    return (
                      <Td py={"15px"} border={"none"} fontSize={"16px"} px={"4px"}>
                        {typeof value === "object" ? (
                          value.type === "tags" ? (
                            <TableTagGroup data={value.data} tagToShow={0} /> // to show only 1 tag in Status consumer chain
                          ) : value.type === "LINK" ? (
                            <Link
                              textDecoration={"underline"}
                              target="_blank"
                              href={value.url}
                            >
                              {value.type === "LINK"
                                ? value.label
                                : value.label}
                            </Link>
                          ) : value.type === "PATH" ? (
                            <PathLink
                              style={{ textDecoration: "underline" }}
                              to={value.url}
                            >
                              Proposal#{value.label}
                            </PathLink>
                          ) : value === "Neutron" ? (
                            <Flex alignItems={"center"} gap={"15px"}>
                              <Avatar
                                name={value.label}
                                size={"sm"}
                                src={"/Neutron.svg"}
                              />
                              {value.label}
                            </Flex>
                          ) : (
                            "-"
                          )
                        ) : typeof value === "number" ? (
                          `$ ${value.toLocaleString()}`
                        ) : (
                          value
                        )}
                      </Td>
                    );
                  })}
              </Tr>
            );
          })}

          <Tr>
            {totalValue && (
              <Td
                py={"15px"}
                border={"none"}
                fontWeight="bold"
                borderTop={"1px solid"}
                fontSize={20}
              >
                Total
              </Td>
            )}
            {keys?.slice(1).map((key: string, index: number) => {
              return (
                totalValue && (
                  <Td
                    key={index}
                    py={"15px"}
                    border={"none"}
                    borderTop={"1px solid"}
                    fontWeight="bold"
                  >
                    ${" "}
                    {typeof totalValue === "number"
                      ? `$ ${totalValue.toLocaleString()}`
                      : totalValue}
                  </Td>
                )
              );
            })}
          </Tr>
        </Tbody>
      </Table>
      {totalPages && pagination && (
        <Pagination
          currentPage={currentPage.current}
          totalPages={totalPages.current}
          onPageChange={handlePageClick}
          alignSelf={"flex-end"}
        />
      )}
    </TableContainer>
  );
};

export default CustomTable;
