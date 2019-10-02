import React ,{ useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {withTranslation} from "react-i18next";
import {getPublic, remove, update, add} from "../webclient/OpeningClient";

const ManageOpening = ({ t, appState }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    function findAll() {
        getPublic().then(response => {
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
        console.info("OpeningTimes: " + JSON.stringify(appState));
        findAll();
    }, []);

    return (
        <MaterialTable
            title="Manage Opening Times"
            columns={[
                { title: t('columns_day'), field: 'day' },
                { title: t('columns_start_am'), field: 'startAm' },
                { title: t('columns_end_am'), field: 'endAm' },
                { title: t('columns_start_pm'), field: 'startPm' },
                { title: t('columns_endPm'), field: 'endPm' },
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
export default withTranslation()(ManageOpening);