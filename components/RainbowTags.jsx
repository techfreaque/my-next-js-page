import {Space, Tag} from "antd"

export function RainbowTags({tagList}) {
    const _tagColors = tagList.length > 6 ? manyTagColors : tagColors
    return (
        <Space size={
                [0, 8]
            }
            style={
                { // maxWidth: "450px",
                    marginTop: "10px"
                }
            }
            wrap>
            {
            tagList.map((tag, index) => (
                <Tag key={index}
                    color={
                        _tagColors[index]
                } style={{whiteSpace: "break-spaces"}}>
                    {tag}</Tag>
            ))
        } </Space>

    )
}

const tagColors = [
    "magenta",
    // "red",
    "volcano",
    // "orange",
    "gold",
    "lime",
    // "green",
    "cyan",
    // "blue",
    // "geekblue",
    "purple",
]

const manyTagColors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
]
