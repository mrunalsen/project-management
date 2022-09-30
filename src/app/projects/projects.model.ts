export class Projects {

    public title: string;
    public info: string;
    public category: string;
    constructor(
        title: string,
        info: string,
        category: string,
    ) {
        this.title = title
        this.info = info
        this.category = category
    }
}

export class ProjectInfo {
    public summary: string;
    public detail: string;
    public category: string;
    public billingType: string;
    public status: string;

    constructor(
        summary: string,
        detail: string,
        category: string,
        billingType: string,
        status: string
    ) {
        this.summary = summary
        this.detail = detail
        this.category = category
        this.billingType = billingType
        this.status = status
    }
}