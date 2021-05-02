import React, {useEffect, useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../App.css";
import firbase from "../firebase"
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";









class UpdateItems extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            title:'',
            about:'',
            booktype:'',
            date:'',
            price:0,
            files:null
        }
        this.changeTitle= this.changeTitle.bind(this);
        this.changeAbout = this.changeAbout.bind(this);
        this.changeBookType = this.changeBookType.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changePrice = this.changePrice.bind(this);
        //this.uploadImage = this.uploadImage(this);
        //this.changeImage = this.changeImage(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeTitle=event=>{
        this.setState({
            title:event.target.value
        });
        console.log("---------------"+event.target.value);
    }
    changeAbout=event=>{
        this.setState({
            about:event.target.value

        });
        console.log("---------------"+event.target.value);
    }

    changeBookType=event=>{
        this.setState({
            booktype:event.target.value
        });
        console.log("---------------"+event.target.value+" ------- ");
    }

    changeDate=event=>{
        this.setState({
            date:event.target.value
        });
        console.log("---------------"+event.target.value);
    }
    changePrice=event=>{
        this.setState({
            price:+event.target.value
        });
        console.log("---------------"+event.target.value);
    }
    /*
     changeImage=file=>{
         this.setState({
             setImageSelected:file.target.value
         });
         console.log("---------------"+file.target.value);
     }
     */
    /*
    uploadImage=event=>{
            //console.log(files);
            //console.log(files[0]);

            this.setState({
                setImageSelected:event.target.files[0]
            });

        //console.log("---------------"+event.target.files[0]);
        const formData = new FormData();
        //setImageSelected:this.state.setImageSelected;

        formData.append("file",this.setImageSelected);
        formData.append("upload_preset","bookCover");

        axios.post("https://api.cloudinary.com/v1_1/detjyuyb3/image/upload",formData).then(Response=>{
        console.log(Response);
    });
    };
     */

    fileSelectedHandler= (files)=>{
        this.setState({
            files:files
        })

    }
    fileUploadHandler=()=>{


        let bucketName ='images'
        let file = this.state.files[0]
        let storageRef = firbase.storage().ref(`${bucketName}/${file.name}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on(firbase.storage.TaskEvent.STATE_CHANGED,()=>{
            let downloadUrl = uploadTask.snapshot.getDownloadURL

        })

        /*
        const fd = new FormData();
        fd.append("image",this.state.selectedFle,this.state.selectedFle.name);
       // fd.append("upload_preset","bookCover");
        axios.post("https://console.firebase.google.com/project/shopping-tool-d54ec/storage/shopping-tool-d54ec.appspot.com/files",fd).then(
            res=>{
                console.log(res)
            })
         */
    }
    onSubmit=event=>{
        event.preventDefault();
        const addProdct={
            title:this.state.title,
            about:this.state.about,
            booktype:this.state.booktype,
            date:this.state.date,
            price:this.state.price
        }
        axios.post('http://localhost:4001/app/addItems',addProdct).then(response=> console.log(response.data))
        //console.log("---------------in side submit button"+event.target.value);
        this.setState=({
            title:'',
            about:'',
            booktype:'',
            date:'',
            price:''

        });

    }


    render() {
        return(
            <div>
                <div >
                    <div className="card">
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="card-01">
                                            <div className="card-body">
                                                <form className="row g-3" onSubmit={this.onSubmit}>

                                                    <div className="mb-3">
                                                        <label htmlFor="inputName" className="form-label">Title of Book</label>
                                                        <input type="name" className="form-control" id="inputName" placeholder="Enter Name of Book"
                                                               onChange={this.changeTitle}
                                                               value={this.props.title}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div>
                                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                                                      rows="2" placeholder="Enter a small discription about your book ex-autor , published date , pages etc"
                                                                      onChange={this.changeAbout}
                                                                      value={this.props.about}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <label htmlFor="inputHallno" className="form-label">Type</label>
                                                        <select id="inputHallno" className="form-select"

                                                                onChange={this.changeBookType}
                                                                value={this.props.booktype}

                                                        >
                                                            <option>Select Type</option>
                                                            <option>Novel</option>
                                                            <option>Research</option>
                                                            <option>Acadamic</option>
                                                            <option>Other</option>

                                                        </select>
                                                    </div>

                                                    <div className="col-4">
                                                        <label htmlFor="inputDate" className="form-label">Date</label>
                                                        <DatePickerComponent placeholder="Enter Date"
                                                                             onChange={this.changeDate}
                                                                             value={this.props.date}
                                                        />
                                                    </div>

                                                    <div className="col-6">
                                                        <label htmlFor="inputNumber" className="form-label">Price</label>
                                                        <input type="text" className="form-control" id="inputNumber"
                                                               placeholder="Enter amount in dollers"
                                                               onChange={this.changePrice}
                                                               value={this.props.price}
                                                        />
                                                    </div>
                                                    <label>Enter image of cover page</label>
                                                    <div className="col-9">
                                                        <input className="form-control" type="file" id="formFileMultiple" multiple
                                                               onChange={(e)=>{this.fileSelectedHandler(e.target.files)}}
                                                        />
                                                    </div>
                                                    <div className="col-3">
                                                        <label/>
                                                        <button  type="submit" className="btn btn-primary"
                                                                 onClick={this.fileUploadHandler}
                                                        >
                                                            Upload
                                                        </button>
                                                    </div>
                                                    <div className="col-13">
                                                        <button type="submit"  className="btn btn-primary">
                                                           Update
                                                        </button>{" "}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default  UpdateItems;