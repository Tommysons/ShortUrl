import * as React from 'react';
import { UrlData } from '../../interface/UrlData';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../helpers/Constants';
import axios from 'axios';

interface IDataTableProps {
    data: UrlData[];
    updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const { data, updateReloadState } = props;
    const [editId, setEditId] = React.useState<string | null>(null);
    const [newShortUrl, setNewShortUrl] = React.useState<string>('');
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false); // State to manage modal open/close

    const openModal = (id: string) => {
        setEditId(id);
        const item = data.find((item) => item._id === id);
        if (item) {
            setNewShortUrl(item.shortUrl);
        }
        setIsModalOpen(true); // Open modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
        setEditId(null);
        setNewShortUrl('');
    };
    const copyToClipboard = async(url:string) =>{
        try{
    
            await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`)
            alert(`URL copied: ${serverUrl}/shortUrl/${url}`)
        }catch(error){
            console.log(error)
        }
    }

    const saveChanges = async () => {
        try {
            await axios.post(`${serverUrl}/shortUrl/${editId}`, { shortUrl: newShortUrl });
            updateReloadState();
            closeModal(); // Close modal after saving changes
        } catch (err) {
            console.error("Error editing Url: ", err);
        }
    };

    const deleteUrl = async (id: string) => {
        const response = await axios.delete(`${serverUrl}/shortUrl/${id}`);
        console.log(response);
        updateReloadState();
    };

    return (
        <div className='container mx-auto pt-2 pb-10'>
            <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'>
                <table className='w-full table-fixed text-sm text-left rtl:text-right text-gray-500'>
                    <thead className='text-md uppercase text-gray-50 bg-gray-700'>
                        <tr>
                            <th scope='col' className='px-6 py-3 w-6/12'>FullUrl</th>
                            <th scope='col' className='px-6 py-3 w-3/12'>ShortUrl</th>
                            <th scope='col' className='px-6 py-3 '>Clicks</th>
                            <th scope='col' className='px-6 py-3 '>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id} className='border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800'>
                                <td className='px-6 py-3 break-words'>
                                    <Link to={item.fullUrl} target='_blank' rel='noreferrer noopener'>
                                        {item.fullUrl}
                                    </Link>
                                </td>
                                <td className='px-6 py-3 break-words'>
                                    <Link to={`${serverUrl}/shortUrl/${item.shortUrl}`} target='_blank' rel='noreferrer noopener'>
                                        {item.shortUrl}
                                    </Link>
                                </td>
                                <td className='px-6 py-3'>{item.clicks}</td>
                                <td className='px-6 py-3'>
                                    <div className="flex content-center">
                                        <div className="cursor-pointer px-2" onClick={() => copyToClipboard(item.shortUrl)}>
                                        <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 fill-white-600"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                        </div>
                                        <div className="cursor-pointer px-2" onClick={() => openModal(item._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                        </div>
                                        <div className="cursor-pointer px-2" onClick={() => deleteUrl(item._id)}>
                                        <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 fill-red-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Edit Short URL</h2>
                        <input
                            type="text"
                            value={newShortUrl}
                            onChange={(e) => setNewShortUrl(e.target.value)}
                            className="border border-gray-300 p-2 mb-4 w-full"
                        />
                        <div className="flex justify-end">
                            <button onClick={saveChanges} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-lg">Save</button>
                            <button onClick={closeModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;
