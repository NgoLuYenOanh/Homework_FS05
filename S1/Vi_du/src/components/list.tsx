import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./list.css";
export const List = () => {
  const data = [
    {
      id: 1,
      name: "Personal Work No.1",
    },
    {
      id: 2,
      name: "Personal Work No.2",
    },
    {
      id: 3,
      name: "Personal Work No.3",
    },
    {
      id: 4,
      name: "Personal Work No.4",
    },
    {
      id: 5,
      name: "Personal Work No.5",
    },
  ];
  return (
    <>
      <table>
        <tbody>
          {data.map((list) => (
            <tr key={list.id}>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>{list.name}</td>
              <td>
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
