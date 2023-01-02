import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuList } from '../../redux/slices/menuSlice';
import DeleteAction from './DeleteAction';
import MenuTable from './MenuTable';
import PresenceCheckbox from './PresenceCheckbox';

function Menu() {
  const [rowId, setRowId] = useState(null);
  const columns = useMemo(() => [
    {
      field: 'id', headerName: '№', width: 100, filterable: false,
    },
    { field: 'title', headerName: 'Title', width: 200 },
    {
      field: 'description', headerName: 'Description', width: 200, filterable: false, sortable: false,
    },
    { field: 'price', headerName: 'Price, rub.', width: 100 },
    { field: 'category', headerName: 'Category', width: 150 },
    {
      field: 'status', headerName: 'Status', width: 100, type: 'actions', renderCell: (params) => <PresenceCheckbox params={params} />,
    },
    {
      field: 'delete', headerName: 'Delete', width: 100, type: 'string', renderCell: (params) => <DeleteAction params={params} />,
    },
  ], [rowId]);
  const menu = useSelector((state) => state.menu.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menu.length === 0) { dispatch(getMenuList()); }
  }, []);
  return (
    <MenuTable rows={menu} columns={columns} rowId={rowId} setRowId={setRowId} />
  );
}

export default Menu;
