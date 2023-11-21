class APIFilters {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword;
        if (keyword) {
            this.query = this.query.find({ name: { $regex: keyword, $options: 'i' } });
        }
        return this;
    }

    filter() {
        const category = this.queryStr.category;
        const sort = this.queryStr.sort;
        if (category) {
            this.query = this.query.where({ category: category });
        }
        if (sort === 'lowToHigh') {
            this.query = this.query.sort('price');
        }
        if (sort === 'highToLow') {
            this.query = this.query.sort('-price');
        }
        return this;
    }

    pagination(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }

    async execute() {
        return await this.query.exec();
    }
}

export default APIFilters;
