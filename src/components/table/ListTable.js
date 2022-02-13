import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTable } from '../../redux/actions';
import Button from '../common/button/Button';
import Table from '../common/table/Table';
import TableBody from '../common/table/TableBody';
import TableHead from '../common/table/TableHead';

const ListTable = () => {
  const table = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Button
        handleClick={() => {
          navigate('/admin/table/add');
        }}
        text='Add Table'
        className='btn-primary m-4'
      />
      <Table>
        <TableHead>
          {table.header ? (
            <tr>
              {table.header.map((val, idx) => {
                return <td key={idx}>{val}</td>;
              })}
            </tr>
          ) : (
            ''
          )}
        </TableHead>
        <TableBody>
          {table.data.length > 0 ? (
            table.data.map((val, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{val.tableNumber}</td>
                  <td>
                    {val.status === '1' ? (
                      <span style={{ color: 'blue' }}>Available</span>
                    ) : (
                      <span style={{ color: 'orange' }}>Unavailable</span>
                    )}
                  </td>
                  <td>
                    <Button
                      handleClick={() => {
                        dispatch(deleteTable(idx));
                      }}
                      text='Delete'
                      className='btn-danger m-1 btn-sm'
                    ></Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4} align={'center'}>
                No Data Available !
              </td>
            </tr>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default ListTable;
