import { Component } from "react";
import Link from "next/link";

import Button from "../../custom/button";

interface IResponse {
  res: any;
  err: any;
}

class Error extends Component {
  constructor(public props: any) {
    super(props);
  }

  static getInitialProps(response: IResponse) {
    const { res, err } = response;
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <>
        {statusCode ? (
          statusCode === 404 ? (
            <div className="error">
              <img width="100%" src={require("../../static/images/404.jpg")} />
              <Link href="/" prefetch>
                <Button fullWidth color="secondary">
                  <span>{"بازگشت به خانه"}</span>
                </Button>
              </Link>
            </div>
          ) : (
            `An error ${statusCode} occurred on server`
          )
        ) : (
          "An error occurred on client"
        )}
      </>
    );
  }
}

export default Error;
