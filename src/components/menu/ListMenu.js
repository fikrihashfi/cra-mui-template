import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMenu } from '../../redux/actions';
import Button from '../common/button/Button';
import Table from '../common/table/Table';
import TableBody from '../common/table/TableBody';
import TableHead from '../common/table/TableHead';

const ListMenu = () => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Button
        handleClick={() => {
          navigate('/admin/menu/add');
        }}
        text='Add Menu'
        className='btn-primary m-4'
      />
      <Table>
        <TableHead>
          {menu.header ? (
            <tr>
              {menu.header.map((val, idx) => {
                return <td key={idx}>{val}</td>;
              })}
            </tr>
          ) : (
            ''
          )}
        </TableHead>
        <TableBody>
          {menu.data ? (
            menu.data.map((val, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{val.name}</td>
                  <td>Rp.{val.price},-</td>
                  <td>
                    <Button
                      handleClick={() => {
                        dispatch(deleteMenu(idx));
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

export default ListMenu;
