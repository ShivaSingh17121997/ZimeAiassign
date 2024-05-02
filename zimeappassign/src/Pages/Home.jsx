import React, { useEffect, useState } from 'react';
import { Button, ConfigProvider, Space, Input, Table, Tag } from "antd";



import axios from 'axios';
// import Card from '../Components/Card';
import Pagination from '../Components/Pagination';


import { TinyColor } from '@ctrl/tinycolor';
const colors1 = ['#6253E1', '#04BEFE'];
const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

// input

//const { TextArea } = Input;




export default function Home() {
    const [data, setData] = useState([]);      // Storing the array of elements in the data state
    const [searchQuery, setSearchQuery] = useState('');      // Storing the search query
    const [page, setPage] = useState(1);  // for paginagtion
    const [columns, setColumns] = useState([
        {
            title: "ID",
            dataIndex: "id",
            width: "50px"
        },
        {
            title: "Title",
            dataIndex: "title",
            width: "230px"

        },
        {
            title: "Body",
            dataIndex: "body",
            width: "700px"

        }, {
            title: "Tags",
            dataIndex: "tags",
            
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
    ])



    useEffect(() => {
        try {
            const skip = (page - 1) * 10
            console.log(searchQuery)
            // Fetching the data from the API 
            axios.get(`https://dummyjson.com/posts/search?q=${searchQuery}&skip=${skip}&limit=10`)

                .then((response) => {
                    console.log(response.data.posts);
                    setData(response.data.posts);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        } catch (error) {
            console.log("Something is wrong in fetching the data");
        }
    }, [page, searchQuery]);


    // pagination
    const prevPage = () => {
        setPage(page => page - 1)
    }

    const nextPage = () => {
        setPage(page => page + 1)
    }


    // Reset
    const handleReset = () => {
        window.location.reload()
    }


    // filter functionality

    const handleFilter = (tag) => {
        const filterData = data.filter((item) => item.tags.includes(tag))
        setData(filterData)
    }

    return (
        <div >

            <div style={{ margin: "10px auto 10px  ", width: "960px" }} >
                <Input
                    size="large"
                    width="100px"
                    type="text"
                    placeholder="Search your favourites here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>


            <div>

                {/*  */}

                <Space>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }} >
                        <Button type="primary" size="large" onClick={() => handleFilter("history")} >History  </Button>

                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }} >
                        <Button type="primary" size="large" onClick={() => handleFilter("french")} >French   </Button>

                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >
                        <Button type="primary" size="large" onClick={() => handleFilter("french")} >French   </Button>

                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >
                        <Button type="primary" size="large" onClick={() => handleFilter("magical")} >Magical </Button>
                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >

                        <Button type="primary" size="large" onClick={() => handleFilter("love")} >Love       </Button>
                    </ConfigProvider>


                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(90deg,  ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >
                        <Button type="primary" size="large" onClick={() => handleFilter("american")} >American</Button>

                    </ConfigProvider>


                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(90deg,  ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >
                        <Button type="primary" size="large" onClick={() => handleFilter("fiction")} >Fiction </Button>
                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(90deg,  ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >

                        <Button type="primary" size="large" onClick={() => handleFilter("mystery")} >Mystry  </Button>
                    </ConfigProvider>


                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(116deg,  ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }} >
                        <Button type="primary" size="large" onClick={() => handleFilter("crime")} >Crime     </Button>


                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(116deg,  ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }} >
                        <Button type="primary" size="large" onClick={() => handleFilter("english")} >english </Button>

                    </ConfigProvider>

                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(116deg,  ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }} >

                        <Button type="primary" size="large" onClick={() => handleFilter("classic")} >Classic </Button>

                    </ConfigProvider>
                </Space>
            </div>


            {/* Reset Button */}
            <div style={{ textAlign: "right", margin: "0 0 10px 0" }} >
                <space>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(135deg, ${colors2.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >
                        <Button onClick={handleReset} type="primary" size="large"  >Reset  </Button>

                    </ConfigProvider>
                </space>
            </div>




            {/* Table  */}
            <Table pagination={false} columns={columns} dataSource={data} scroll={{ y: 500 }} />



            {/* Pagination */}
            <div style={{ margin: "15px 0 0 0" }} >
                {
                    <Pagination totalPage={data.total} page={page} nextPage={nextPage} dataSource={data} prevPage={prevPage} />
                }
            </div>
        </div>
    );
}
