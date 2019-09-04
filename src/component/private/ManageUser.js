import React ,{ useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {withTranslation} from "react-i18next";
import {getAll, remove, update, add} from "../webclient/UserClient";

const ManageUser = ({ t, appState }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    function findAll() {
        getAll().then(response => {
            if (response) {
                setData(response);
            } else {
                // TODO
            }
        }).catch(error =>{
            //TODO
        });
    }

    useEffect(() => {
        console.info("Users: " + JSON.stringify(appState));
        findAll();
    }, []);

    return (
        <MaterialTable
            title="Editable Example"
            columns={[
                { title: t('columns_title'), field: 'name' },
                { title: t('columns_description'), field: 'email' },
                { title: t('columns_day'), field: 'allRoles' },
                { title: t('columns_password'), field: 'pass' },
                { title: t('columns_active'), field: 'active', type: 'boolean' },
            ]}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setLoading(true);
                        add(newData).then(() => {
                            resolve();
                            findAll();
                            setLoading(false);
                        }).catch(error => {
                            resolve();
                            setLoading(false);
                        });
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setLoading(true);
                        update(newData).then(() => {
                            resolve();
                            findAll();
                            setLoading(false);
                        }).catch(error => {
                            resolve();
                            setLoading(false);
                        });
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setLoading(true);
                        remove(oldData).then(() => {
                            resolve();
                            findAll();
                            setLoading(false);
                        }).catch(error => {
                            resolve();
                            setLoading(false);
                        });
                    }),
            }}
            options={{
                pageSize: 5,
                initialPage: 0
            }}
            localization={{
                body: {
                    editRow: {
                        deleteText: t('body_delete_text')
                    },
                    addTooltip: t('body_tooltip_add'),
                    deleteTooltip: t('body_tooltip_delete'),
                    editTooltip: t('body_tooltip_edit')
                }
            }}
            isLoading={loading}
        />
    );
}
export default withTranslation()(ManageUser);