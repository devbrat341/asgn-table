// components/Table.js
"use client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { pdfjs, Document, Page } from "react-pdf";
import PDFViewer from "./PdfViewer";
import { FaEye } from "react-icons/fa";

const Table = ({ data }) => {
  const [tableData, setTableData] = useState(data || []);
  const [editMode, setEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e, rowIndex, columnKey) => {
    const newValue = e.target.value;
    const updatedData = [...tableData];
    updatedData[rowIndex] = {
      ...updatedData[rowIndex],
      [columnKey]: newValue,
    };

    setTableData(updatedData);
    console.log("Updated Table Data:", updatedData);
  };
  const openPdfModal = (pdfUrl) => {
    setPdfUrl(pdfUrl);
    setIsModalOpen(true);
  };
  pdfjs.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

  const closePdfModal = () => {
    setIsModalOpen(false);
    setPdfUrl(null);
  };
  const handleSave = async (index) => {
    const id = tableData[index]?._id;
    setEditMode(!editMode);
    try {
      const res = await fetch(`http://localhost:3000/api/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(tableData[index]),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200 border border-black">
        <thead className="flex">
          <tr className="sticky left-0 bg-green-300 border ">
            <th className="whitespace-nowrap px-3 py-3 text-left">#</th>
            <th className="whitespace-nowrap px-3 py-3 text-left">
              Agent Name
            </th>
            <th className="whitespace-nowrap px-3 py-3 text-left">
              Agent Phone Number
            </th>
            <th className="whitespace-nowrap px-3 py-3 text-left">
              Date of Lead Created
            </th>
            <th className="whitespace-nowrap px-3 py-3 text-left">
              Lead Source
            </th>
          </tr>
          <tr className="bg-green-300">
            <th className="whitespace-nowrap px-2 py-3 text-left">
              Buyer Full Name
            </th>
            <th className="whitespace-nowrap px-2 py-3 text-left">
              Phone Number
            </th>
            <th className="whitespace-nowrap px-10 py-3 text-left">Email Id</th>
            <th className="whitespace-nowrap px-10 py-3 text-left">
              Date of Birth
            </th>
            <th className="whitespace-nowrap px-2 py-3 text-left">
              Passport Number
            </th>
            <th className="whitespace-nowrap px-2 py-3 text-left">
              Passport Expiry
            </th>
            <th className="whitespace-nowrap px-2 py-3 text-left">
              Nationality
            </th>
            <th className="whitespace-nowrap px-2 py-3 text-left">
              UAE Resident
            </th>
            <th className="whitespace-nowrap px-10 py-3 text-left">
              Total Commission VAT
            </th>
            <th className="whitespace-nowrap px-2 py-3 text-left">
              Net/Total Comission
            </th>
            <th className="whitespace-nowrap px-2 py-3 text-left">
              EOI Reciept
            </th>
          </tr>
          <tr className="sticky right-0  bg-red-300">
            <th className="px-6 py-3 text-left">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tbody key={rowIndex} className="flex border border-black">
              <tr className="sticky left-0">
                <td className=" bg-white px-4">{rowIndex + 1}</td>
                <td className=" bg-white ">
                  <input
                    type="text"
                    value={row.AgentName}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "AgentName")
                    }
                    className="w-[120px]  border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white ">
                  <input
                    type="text"
                    value={row.AgentPhoneNumber}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "AgentPhoneNumber")
                    }
                    className="w-[190px]  border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.DateofLeadCreated}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "DateofLeadCreated")
                    }
                    className="w-[180px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.LeadSource}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "LeadSource")
                    }
                    className="w-[120px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
              </tr>
              <tr>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.BuyerFullName}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "BuyerFullName")
                    }
                    className="w-[140px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.PhoneNumber}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "PhoneNumber")
                    }
                    className="w-[140px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.EmailId}
                    disabled={!editMode}
                    onChange={(e) => handleInputChange(e, rowIndex, "EmailId")}
                    className="w-[160px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.DateofBirth}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "DateofBirth")
                    }
                    className="w-[150px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.PassportNumber}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "PassportNumber")
                    }
                    className="w-[140px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.PassportExpiry}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "PassportExpiry")
                    }
                    className="w-[140px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.Nationality}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "Nationality")
                    }
                    className="w-[110px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.UAEResident}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "UAEResident")
                    }
                    className="w-[180px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.TotalCommissionVAT}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "TotalCommissionVAT")
                    }
                    className="w-[190px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <input
                    type="text"
                    value={row.NetTotalComission}
                    disabled={!editMode}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "NetTotalComission")
                    }
                    className="w-[190px] border-gray-300 rounded-md px-2 py-1"
                  />
                </td>
                <td className=" bg-white whitespace-nowrap">
                  <FaEye
                    className="w-[90px] "
                    onClick={() =>
                      openPdfModal(() => openPdfModal("/doc/next_pdf.pdf"))
                    }
                  />
                </td>
              </tr>
              <tr className="sticky right-0 p-0">
                <td className="flex gap-3 bg-white py-2 px-4">
                  <CiEdit onClick={handleEditClick} />
                  <TiTickOutline onClick={() => handleSave(rowIndex)} />
                </td>
              </tr>
            </tbody>
          ))}
        </tbody>
      </table>

      {isModalOpen && pdfUrl && (
        <PDFViewer pdfUrl={pdfUrl} closePdfModal={closePdfModal} />
      )}
    </main>
  );
};

export default Table;
