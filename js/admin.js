$(document).ready(function () {
    
  $("#search").autocomplete({
    source: async function (req, res) {
      
      

      if (($('#field').val() === 'skills')) {

        let data1 = await fetch(`./searchskills?term=${req.term}`)
          .then(results => results.json())
          .then(

            results => {
              const array = new Array();
              results.map(
                result => {
                  array.push(result.skills);

                }
              );
              const set = new Set(array.map(item => item));

              //for (let item of set) return { value: item };

              const a = [...set];

              return a
            }

          ).then(a => a.map(item => { return { value: item }; }));
        res(data1);
      }
      else if (($('#field').val() === 'name')) {

        let data = await fetch(`./searchname?term=${req.term}`)
          .then(results => results.json())

          .then(

            results => {
              const array = new Array();
              results.map(
                result => {
                  array.push(result.name);

                }
              );
              const set = new Set(array.map(item => item));

              //for (let item of set) return { value: item };

              const a = [...set];

              return a
            }

          ).then(a => a.map(item => { return { value: item }; }));
        res(data);
      }
      else if (($('#field').val() === 'college')) {

        let data = await fetch(`./searchcollege?term=${req.term}`)
          .then(results => results.json())
          .then(

            results => {
              const array = new Array();
              results.map(
                result => {
                  array.push(result.college);

                }
              );
              const set = new Set(array.map(item => item));

              //for (let item of set) return { value: item };

              const a = [...set];

              return a
            }

          ).then(a => a.map(item => { return { value: item }; }));
        res(data);
      }
      else if (($('#field').val() === 'department')) {

        let data = await fetch(`./searchdepartment?term=${req.term}`)
          .then(results => results.json())
          .then(

            results => {
              const array = new Array();
              results.map(
                result => {
                  array.push(result.department);

                }
              );
              const set = new Set(array.map(item => item));

              //for (let item of set) return { value: item };

              const a = [...set];

              return a
            }

          ).then(a => a.map(item => { return { value: item }; }));
        res(data);
      }
      else if (($('#field').val() === 'degree')) {

        let data = await fetch(`./searchdegree?term=${req.term}`)
          .then(results => results.json())
          .then(results => {
            const array = new Array();
            results.map(
              result => {
                array.push(result.degree);

              }
            );
            const set = new Set(array.map(item => item));

            const a = [...set];

            return a;
          }).then(a => a.map(item => { console.log(item); return { value: item }; }));
        res(data);
      }
      else if (($('#field').val() === 'location')) {

        let data = await fetch(`./searchlocation?term=${req.term}`)
          .then(results => results.json())
          .then(

            results => {
              const array = new Array();
              results.map(
                result => {
                  array.push(result.location);

                }
              );
              const set = new Set(array.map(item => item));

              //for (let item of set) return { value: item };

              const a = [...set];

              return a
            }

          ).then(a => a.map(item => { return { value: item }; }));
        res(data);
      }
    //  // else if (($('#field').val() === 'years')) {
    //    let v=document.getElementById("field").value;
      

    //     let data = await fetch(`http://localhost:3000/searchyears?term=${req.term}`)
    //       .then(results => results.json())
    //       .then(


    //         results => {
    //           const array = new Array();
    //           results.map(
    //             result => {
    //               console.log(result);
    //               array.push(result.v);


    //             }
    //           );
    //           const set = new Set(array.map(item => item));

    //           //for (let item of set) return { value: item };

    //           const a = [...set];

    //           return a
    //         }

    //       ).then(a => a.map(item => { return { value: item }; }));
    //     res(data);
      

    },
    minLength: 1,
    select: function (event, ui) {
      console.log(ui.item);
    }
  });
});