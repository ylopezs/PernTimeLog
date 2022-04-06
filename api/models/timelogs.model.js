module.exports = (sequelize, Sequelize) => {
    const Timelogs = sequelize.define("timelogs", {
      start: {
        type: Sequelize.DATE
      },
      end: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
    });
    return Timelogs;
  };