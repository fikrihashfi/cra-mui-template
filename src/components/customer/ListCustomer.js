import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCustomer } from '../../redux/actions';
import Button from '../common/button/Button';
import Table from '../common/table/Table';
import TableBody from '../common/table/TableBody';
import TableHead from '../common/table/TableHead';

const ListCustomer = () => {
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Button
        handleClick={() => {
          navigate('/admin/customer/add');
        }}
        text='Add Customer'
        className='btn-primary m-4'
      />
      <Table>
        <TableHead>
          {customer.header ? (
            <tr>
              {customer.header.map((val, idx) => {
                return <td key={idx}>{val}</td>;
              })}
            </tr>
          ) : (
            ''
          )}
        </TableHead>
        <TableBody>
          {customer.data ? (
            customer.data.map((val, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.address}</td>
                  <td>
                    <Button
                      handleClick={() => {
                        dispatch(deleteCustomer(idx));
                      }}
                      text='Delete'
                      className='btn-danger m-1 btn-sm'
                    />
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

export default ListCustomer;
