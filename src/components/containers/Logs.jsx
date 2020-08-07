import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import { fetchLogsRequest } from "../../actions/creators/logActions";
import Dashboard from "./Dashboard";
import fetcher from "../../helpers/fetcher";
import compareRequest from "../../actions/creators/comparismActions";

// Styles
import "../../assets/stylesheets/components/containers/logs.scss";
import circleRed from "../../assets/images/circle-red.svg";
import circleGreen from "../../assets/images/circle-green.svg";

class Logs extends Component {
  componentDidMount() {
    const { fetchLogs } = this.props;
    const userId = fetcher.getUserId();
    fetchLogs(userId);
  }

  handleClick = (log) => {
    const {
      documents: { file_one, file_two },
    } = log;
    const documentsData = {
      nameOne: file_one.owner,
      nameTow: file_two.owner,
      fileOne: file_one.content,
      fileTwo: file_two.content,
    };
    const userId = fetcher.getUserId();
    const { compareDocuments, fetchLogs } = this.props;

    // Note that the API request below is ideally supposed to be that of update comparism!
    compareDocuments(documentsData, userId).then(() => fetchLogs(userId));
  };

  render() {
    const { fetchingLogs, logs } = this.props;
    return (
      <Dashboard>
        <div className="container p-5">
          <h2 className="text-center text-white mt-4 mb-5">Your Logs</h2>
          <div className="row">
            <div className="col-12">
              {fetchingLogs ? (
                <div className="d-flex justify-content-center">
                  {" "}
                  <MDSpinner />
                </div>
              ) : (
                this.showLogs(logs)
              )}
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }

  showLogs = (logs) => {
    if (logs && logs.length === 0) {
      return (
        <h5 className="text-center text-white">
          You have not compared any documents yet
        </h5>
      );
    } else {
      return (
        <div className="accordion" id="LogsAccordion">
          {logs.map((log) => (
            <div key={log.id} className="card">
              <div className="card-header" id={`heading${log.id}`}>
                <h2 className="mb-0">
                  <button
                    className="d-flex align-items-center btn btn-link btn-block text-left text-dark font-weight-bold"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse${log.id}`}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <img
                      src={log.value > 20 ? circleRed : circleGreen}
                      alt="Circle icon"
                      width="14"
                      className="mr-2"
                    />
                    {`#${log.id}: Compared on ${log.created_at}`}
                  </button>
                </h2>
              </div>

              <div
                id={`collapse${log.id}`}
                className="collapse hide"
                aria-labelledby={`heading${log.id}`}
                data-parent="#LogsAccordion"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="row p-3">
                        <h5>{`${log.value}% Similarity`}</h5>
                      </div>
                      <table className="table">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">{log.documents.file_one.owner}</th>
                            <th scope="col">{log.documents.file_two.owner}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{`${log.documents.file_one.content}...`}</td>
                            <td>{`${log.documents.file_two.content}...`}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="dropdown-divider mt-2 mb-2"></div>
                  <div className="row d-flex justify-content-end p-3">
                    <button
                      type="button"
                      className="btn btn-blue"
                      onClick={() => this.handleClick(log)}
                    >
                      Re-run
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };
}

Logs.propTypes = {
  fetchLogs: PropTypes.func.isRequired,
  fetchingLogs: PropTypes.bool.isRequired,
  comparing: PropTypes.bool.isRequired,
  logs: PropTypes.array.isRequired,
};

const mapStateToProps = ({
  log: { fetchingLogs, logs },
  comparism: { comparing },
}) => ({
  fetchingLogs,
  logs,
  comparing,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLogs: (userId) => dispatch(fetchLogsRequest(userId)),
  compareDocuments: (documentsData, userId) =>
    dispatch(compareRequest(documentsData, userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logs));
