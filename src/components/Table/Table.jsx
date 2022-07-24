import { useDispatch, useSelector } from "react-redux";
import "./Table.scss";

export const Table = ({ data }) => {

    const loading = useSelector(({ loading }) => loading)
    const inputValue = useSelector(({ inputValue }) => inputValue)

    const dispatch = useDispatch()


    const send = (condition) => {
        switch (condition) {
            case 'id':
                dispatch({
                    type: 'SORT_BY_ID',
                })
                break

            case 'title':
                dispatch({
                    type: 'SORT_BY_TITLE',
                })
                break

            case 'descr':
                dispatch({
                    type: 'SORT_BY_DESCRIPTION',
                })
                break

            default:
                break
        }
    }

    return (
        <>
            {loading ? (
                <div className="loading">
                    loading...
                </div>
            ) : (
                <>
                    <table>
                        <col style={{ width: "10%" }} ></col>
                        <col style={{ width: "50%" }} ></col>
                        <thead>
                            <tr>
                                <th onClick={() => send('id')}>ID</th>
                                <th onClick={() => send('title')}>Заголовок</th>
                                <th onClick={() => send('descr')}>Описание</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.filter((item) => {
                                if (inputValue === "") return item
                                else if (item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                                    item.id.toString().toLowerCase().includes(inputValue.toLowerCase()) ||
                                    item.body.toLowerCase().includes(inputValue.toLowerCase())) {
                                    return item
                                }
                            }).map((item, index) => {
                                let { id, title, body } = item;
                                return (
                                    <tr key={index}>
                                        <td>{id}</td>
                                        <td>{title}</td>
                                        <td>{body}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>
            )}
        </>
    )
}
