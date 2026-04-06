//$Id$

var VODTemplate = {};

VODTemplate = (function (){
	const _templates_v2 = 
	{
		vodDemoPage :
			`<div class="rtcp-vod-homepage">
      			{{header}}
          	</div>`,

		homePanel :
			`<div class="rtcp-vod-container">
				<div class="rtcp-vod-tab-container">
					<div class="rtcp-vod-tabheader center">
						<div class="rtcp-vod-tab center" tab="home" rtcpvodactionbtn purpose="switchTabs">{{home_title}}</div>
						<div class="rtcp-vod-tab center" tab="myVideos" rtcpvodactionbtn purpose="switchTabs">{{my_video_title}}</div>
						<div class="rtcp-vod-tab-active-bar"></div>
					</div>
					<div class="rtcp-vod-upload-btn web-vod-rtcp-vod-upload-btn" rtcpvodactionbtn purpose="goToUploadModal">{{upload_title}}</div>
				</div>
				<div class="rtcp-grid-video-container"></div>
            </div>`,

		videoCategory :
			`<div id="rtcp-vod-{{category}}" category={{category}} class="rtcp-grid-video-items">
				<div class="rtcp-grid-video-items-header-gap"></div>
				<div class="rtcp-grid-video-items-header">
					<div class="header-stack">
						<div class="layer layer-3"></div>
						<div class="layer layer-2"></div>
						<div class="layer layer-1"></div>
					</div>
					<div class="rtcp-grid-video-items-title center">
						<div class="rtcp-grid-video-items-title-heading">{{title}}</div>
						<div class="rtcp-grid-video-items-title-count">
							<span>(</span><span class="rtcp-grid-video-items-title-count-value">{{count}}</span><span>)</span>
						</div>
						<div class="rtcp-demo-vod-icon-dropdown-icon rtcp-vod-category-slider center" rtcpvodactionbtn purpose="slideCategoryPanel"></div>
					</div>
					<div class="rtcp-vod-sort rtcp-demo-vod-icon-comments-sort center" rtcpvodactionbtn purpose="openHomePageSortingOpt">
						<span>Sort by</span>
					</div>
					{{page_size_dropdown}}
				</div>
				<div class="rtcp-grid-video-items-body">
					<div class="rtcp-grid-video-list"></div>
				</div>
			</div>`,

		vodHeader :
			`<div class="rtcp-vod-topheader center">
				<div class="rtcp-vod-topheader-titlesec center">
					<div class="rtcp-vod-topheader-logo center curP" href="{{home_href}}" rtcpvodactionbtn purpose="openHomePage">
						<img src="{{logo_img_src}}" alt="{{alt_text}}">
						<span>{{video_ondemand_title}}</span>
					</div>
				</div>
				<div class="rtcp-demopage-topheader-rhs center">
					{{theme_switcher}}
					<div class="user-profile">
						<img src="{{user_img_src}}" alt="" class="zgh-userAvatar">
					</div>
				</div>
      		</div>`,

		vodTheme_v1 :
			`<div class="rtcp-vod-theme-switcher active center" rtcpvodactionbtn purpose="toggleTheme"></div>`,
		
		// vodTheme_v1 :
		// 	`<div class="rtcp-vod-theme-switcher active center" rtcpvodactionbtn purpose="toggleTheme"></div>`,

		vodTheme_v2 :
			`<div class="theme-toggle-wrapper">
                <div class="rtcp-demo-vod-icon-sun"></div>
                <label class="toggle-switch">
                    <input type="checkbox" id="theme-toggle">
                    <span class="slider"></span>
                </label>
                <div class="rtcp-demo-vod-icon-moon"></div>
            </div>`,
		
		videoUploadModal :
			`<div class="rtcp-demo-vod-upload-dialog container-center" modal="upload">
                <div class="rtcp-demo-vod-studio-modal-header">
                    <div class="rtcp-demo-vod-studio-modal-header-title">
                        <span>Upload Videos</span>
                    </div>
                    <div class="rtcp-demo-vod-studio-modal-header-close center">
						<div class="rtcp-demo-vod-icon-close center" rtcpvodactionbtn purpose="closeStudioModal"></div>
                    </div>
                </div>
                <div class="rtcp-demo-vod-upload-body">
                    <div class="rtcp-demo-vod-upload-dialog-body-content">
						<input type="file" id="file-input" accept="video/*" title=''/>
                        <div class="rtcp-demo-vod-upload-dialog-upload" style="">
                            <img src="../images/landingpage/upload.svg">
                        </div>
                        <div class="rtcp-demo-vod-body-uplod-content" style="">
                            <div class="rtcp-demo-vod-body-content-header">Click to Browse</div>
                            <div class="rtcp-demo-vod-body-content-body">or Drag and drop to add a video file</div>
                        </div>
                        <div class="rtcp-demo-vod-body-uplod-drop">
                            <span>Drop your video file here to upload</span>
                        </div>
                    </div>
                </div>
            </div>`,

		vodStudioModal :
			`<div class="rtcp-demo-vod-studio-modal" contentId={{content_id}} modal="{{modal}}">
                <div class="rtcp-demo-vod-studio-modal-content">
                    <div class="rtcp-demo-vod-studio-modal-header">
                        <div class="rtcp-demo-vod-studio-modal-header-text">{{title}}</div>
                        <div class="rtcp-demo-vod-studio-modal-header-close center">
                            <div class="rtcp-demo-vod-icon-close center" rtcpvodactionbtn purpose="{{close_purpose}}"></div>
                        </div>
                    </div>

                    <div class="rtcp-demo-vod-studio-modal-body">
						<div class="rtcp-demo-vod-studio-modal-body-lhs">
							<div class="rtcp-demo-vod-video-cont rtcp-vod-status-container">
								<div id="rtcp-demo-vod-studio-modal-player"></div>
							</div>
                        </div>
						<div class="rtcp-demo-vod-studio-modal-body-rhs">
							{{meta_info_rhs}}
						</div>
                	</div>
					
                    <div class="rtcp-demo-video-cont-upload-footer">
                        {{footer_action_btns}}
                    </div>
                </div>
        	</div>`,

		videoMetaModalRHS :
			`<div class="rtcp-demo-vod-studio-modal-body-rhs-title">
				<div style="display: flex; gap: 1px;">
					<span>Title</span>
					<span class="note">(Required)</span>
				</div>
				<div class="rtcp-demo-vod-studio-modal-body-rhs-title-cont">
					<textarea style="" placeholder="Give viewers a brief overview of your video" class="rtcp-demo-vod-studio-modal-title-text scroll"></textarea>
					<span class="rtcp-demo-vod-studio-modal-text-count dN"></span>
				</div>
			</div>

			<div class="rtcp-demo-vod-studio-modal-body-rhs-description">
				<div class="rtcp-demo-vod-studio-modal-body-rhs-description-title">
					<span>Description</span>
				</div>
				<div class="rtcp-demo-vod-studio-modal-body-rhs-description-cont" >
					<textarea style="" placeholder="Give viewers a brief overview of your video" class="rtcp-demo-vod-studio-modal-description-text scroll"></textarea>
					<span class="rtcp-demo-vod-studio-modal-text-count dN"></span>
				</div>
			</div>

			<div class="rtcp-demo-vod-studio-modal-body-rhs-thumbnail dN">
				
				<div style="display: flex; align-items: center; gap: 6px;">
					<div style="display: flex; gap: 1px; color: #2A2A4B;font-size: 14px; font-style: normal; font-weight: 500; line-height: 20px;">
						<span>Thumbnail</span>
					</div>
					<div style="" class="rtcp-demo-vod-upload-thumbnail-info-cont">
						<span class="rtcp-demo-vod-icon-info" style="font-size: 16px; padding: 4px; opacity: 0.75; cursor: pointer; color: #545A6A;"></span>
						<div class="rtcp-demo-thumbnailhover-cont">
							<div>Recommendations:</div> 
							<div style="line-height: 24px;white-space: nowrap;display: flex;flex-direction: column;">
								<span style="display: flex;align-items: center;align-content: center;gap: 10px;">
									<span style="width: 3px;height: 3px;display: inline-flex;background: white;align-items: center;justify-content: center;border-radius: 100%;"></span>
									Make your thumbnail 1280*720 pixels (16:9 ratio)
								</span>
								<span style="display: flex;align-items: center;align-content: center;gap: 10px;">
									<span style="width: 3px;height: 3px;display: inline-flex;background: white;align-items: center;justify-content: center;border-radius: 100%;"></span>
									Ensure that your thumbnail is less than 2MB
								</span>
								<span style="display: flex;align-items: center;align-content: center;gap: 10px;">
									<span style="width: 3px;height: 3px;display: inline-flex;background: white;align-items: center;justify-content: center;border-radius: 100%;"></span>
									Use a JPG or PNG file format
								</span>
							</div>
						</div>
					</div>
				</div>

				<div style="overflow: hidden; color: #545A6A; text-overflow: ellipsis;font-size: 14px; font-style: normal; font-weight: 400; line-height: 20px; margin-bottom: 4px;">
					<span>Choose a clear and eye-catching thumbnail that represents your video.</span>
				</div>

				<div style="" class="rtcp-demo-vod-upload-thumbnail-sec">
					
					<div class="rtcp-demp-vod-upload-thumbnail-add-sec" style="">
						<div style="display: flex;align-items: center;justify-content: center;">
							<img src="../images/landingpage/upload_thumbnail.svg" style="width: 42px; height: 42px;">
						</div>
						<span style="color: #545A6A;text-align: center;font-size: 10px;font-style: normal;font-weight: 500;line-height: 12px;white-space: nowrap;width: 85px;">Upload thumbnail</span>
					</div>
					
					<div class="rtcp-demp-vod-upload-thumbnail-uploading-sec" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('img/thumbnail.png') lightgray 50% / cover no-repeat;">
						<div style="display: flex;align-items: center;justify-content: center;font-size: 20px;color: #fff;">
							<div class="rtcp-demo-vod-icon-upload"></div>    
						</div>
						<span style="color: #FFF;text-align: center; font-size: 12px;font-style: normal;font-weight: 400;line-height: 14px; /* 116.667% */">Uploading...</span>
						<div style="position: absolute;width: 100%;height: 5px;bottom: 0px;background: linear-gradient(to right, #2ECC71 50%, #ffffff80 50%);"></div>
					</div>

					<div class="rtcp-demo-vod-thumbnail-loading-sec">
						<span style="color: #545A6A;text-align: center;font-size: 12px;font-style: normal;font-weight: 500;line-height: 16px;opacity: 0.5;width: 58px;">Loading...</span>
					</div>
				</div>
			</div>

			<div class="rtcp-demo-vod-studio-modal-body-rhs-videolink dN">
				<div style="display: flex;gap: 6px;align-items: center;">
					<span style="color: #2A2A4B;font-size: 14px; font-style: normal; font-weight: 500; line-height: 20px;">Video link</span>
					<span class="rtcp-demo-vod-icon-copy rtcp-demo-vod-upload-link-copy-icon" rtcp_demo_tooltip="copy link"></span>
				</div>
				<div class="ellips rtcp-demo-vod-upload-link-copy-text" style="">
					https://VODrtcplatform.in/mPcLhaSidsdsdasfdsfdsfrfrfrggrgregregergterter
					<div style="height: 1px; margin-top: 2px;"></div>
				</div>
			</div>`,

		modalSlider :
			`<div class="rtcp-demo-vod-studio-modal-vid-rhs-slider" rtcpvodactionbtn purpose="toggleEnchanceModalRhs">
				<div class="rtcp-demo-vod-icon-video-cont-upload-modal-vid-rhs-slider-button"></div>
			</div>`,

		enhancementModalRHS  :
			`<div class="rtcp-demo-vod-video-cont-chapter-cont">
				<div class="rtcp-demp-vod-add-chapter-sec">
					<div class="rtcp-demp-vod-add-chapter-btn center disabled" purpose="openAddChapterModal">
						<div class="rtcp-demo-vod-icon-add rtcp-demp-vod-video-cont-add-button-cont center"></div>
						<div class="rtcp-demp-vod-video-cont-add-text-cont">Add</div>
					</div>
					<div class="rtcp-demp-vod-video-cont-add-title-cont">Chapters</div>
				</div>

				<div class="rtcp-demp-vod-add-chapter-elem-sec"></div>
				<div class="rtcp-demo-vod-rhs-module-sep dN"></div>
			</div>`,

		chapterInfo :
			`<div id="{{id}}" class="rtcp-demp-vod-add-chapter-elem" status="">
				<div class="rtcp-demp-vod-add-chapter-elem-header">
					<div class="rtcp-demp-vod-add-chapter-elem-lhs">
						<div class="rtcp-demp-vod-add-chapter-elem-time">{{duration}}</div>
						<div class="rtcp-demp-vod-add-chapter-elem-sep"></div>
						<div class="rtcp-demp-vod-add-chapter-elem-title">{{title}}</div>
					</div>
					<div class="rtcp-demp-vod-add-chapter-elem-rhs">
						<div class="rtcp-demo-vod-toggle-description" rtcp_demo_tooltip="Open" rtcpvodactionbtn purpose="toggleChapterDescription">
							<div class="rtcp-demo-vod-icon-toggle-description"></div>
						</div>
						<div class="rtcp-demo-vod-video-cont-vertical-sep dN"></div>
						<div class="rtcp-demo-vod-icon-edit dN" rtcp_demo_tooltip="Edit" rtcpvodactionbtn purpose="openAddChapterModal"></div>
						<div class="rtcp-demo-vod-icon-delete dN" rtcp_demo_tooltip="Delete" rtcpvodactionbtn purpose="deleteChapter"></div>
					</div>
				</div>
				<div class="rtcp-demp-vod-add-chapter-elem-body">
					<div class="rtcp-demp-vod-add-chapter-elem-description">{{description}}</div>
				</div>
			</div>`,

		addChapterModal :
			`<div class="rtcp-demo-vod-add-chapters-modal dN">
				<div class="rtcp-demo-vod-add-chapters-modal-body">
					<div class="rtcp-demo-vod-add-chapters-modal-body-title-sec">
						<div class="rtcp-demo-vod-add-chapters-modal-body-title-text">
							<span>Title</span>
							<span class="chapter-title-required">(Required)</span>
						</div>
						<div class="rtcp-demo-vod-add-chapters-modal-body-title-textarea vod-chapter-title">
							<textarea placeholder="Give your chapter a clear and concise title"></textarea>
							<span class="rtcp-demo-vod-add-chapters-modal-body-textarea-counter"></span>
						</div>
					</div>
					<div class="rtcp-demo-vod-add-chapters-modal-body-description-sec">
						<div class="rtcp-demo-vod-add-chapters-modal-body-title-text">Description</div>
						<div class="rtcp-demo-vod-add-chapters-modal-body-title-textarea vod-chapter-description">
							<textarea placeholder="Give viewers a brief overview of your video" style="height: 110px;"></textarea>
							<span class="rtcp-demo-vod-add-chapters-modal-body-textarea-counter"></span>
						</div>
					</div>
					<div class="rtcp-demo-vod-add-chapters-modal-body-footer-sec">
						<div class="rtcp-demo-vod-add-chapters-modal-body-footer-sec-timer">
							<input type="text" value="00" >
							<span>:</span>
							<input type="text" value="00" >
							<span>:</span>
							<input type="text" value="00" >
						</div>
						
						<div class="rtcp-demo-vod-add-chapters-modal-body-footer-sec-actions-cont">
							<div class="rtcp-demo-vod-add-chapters-modal-body-footer-sec-actions-cont-cancel" rtcpvodactionbtn purpose="closeAddChapterModal">Cancel</div>
							<div class="rtcp-demo-vod-add-chapters-modal-body-footer-sec-actions-cont-save" rtcpvodactionbtn>Save</div>
						</div>
					</div>
				</div>
			</div>`,

		viewerPage :
			`<div class="rtcp-vod-viewerpage-outercontainer">
				<div class="rtcp-vod-viewerpage-container center">
					<div class="rtcp-vod-viewerpage-lhs">
						{{video_content_section}}
						{{comments_section}}
					</div>
					<div class="rtcp-vod-viewerpage-rhs">
						<div class="rtcp-vod-video-recommendations-sec">
							<div class="rtcp-vod-video-recommendations-title"></div>
							<div class="rtcp-vod-video-recommendations-list"></div>
						</div>
					</div>
				</div>
			</div>`,

		slider :
			`<label class="rtcp-vod-slider">
				<input type="checkbox" class="rtcp-vod-checkbox-input">
				<span class="slider round"></span>
			</label>`,

		playerLoader :
			`<div class="rtcp-mp-spinner" style="">
				<div class="rtcp-mp-spinner-container">
					<div class="rtcp-mp-spinner-rotator">
						<div class="rtcp-mp-spinner-left">
							<div class="rtcp-mp-spinner-circle"></div>
						</div>
						<div class="rtcp-mp-spinner-right">
							<div class="rtcp-mp-spinner-circle"></div>
						</div>
					</div>
				</div>
			</div>`,

		categoryPanelLoader :
			`<div class="rtcp-vod-category-panel-loader">
				<span></span><span></span><span></span><span></span>
			</div>`,
		
		videoContentSection :
			`<div class="rtcp-vod-video-sec">
				<div id="{{player_id}}" class="rtcp-vod-video-container"></div>
				{{content_panel}}
			</div>`,

		contentPanel :
			`<div class="rtcp-vod-video-desc-container">
            	<div class="rtcp-vod-video-details-sec">
                	<div class="rtcp-vod-video-title">{{title}}</div>
                	{{owner_panel}}
                	{{post_stats}}
              	</div>
				<div class="rtcp-vod-video-desc-area">
					<div class="rtcp-vod-video-desc-wrapper">
						<div class="rtcp-vod-video-desc"></div>
					</div>
				</div>
            </div>`,

		ownerPanel :
			`<div class="rtcp-vod-video-owner-sec center">
                <div class="rtcp-vod-video-owner-details center">
                	<div class="rtcp-vod-video-owner-profile center"><img src="{{user_img}}"></div>
                    <div class="rtcp-vod-video-followers-sec center">
                      <div class="rtcp-vod-video-ownername">{{user_name}}</div>
                      <div class="rtcp-vod-video-followers dN">
                        <span class="rtcp-vod-video-followers-count dN">{{followers_count}}</span><span>{{followers_title}}</span>
                      </div>
                    </div>
                </div>
                <div class="rtcp-vod-follow-btn center dN">{{follow_title}}</div>
				<div class="rtcp-vod-like-cont dN" tooltip-title="{{tp_like}}">
					<div class="rtcp-vod-like-btn center" rtcpvodactionbtn purpose="toggleLikeStatus"></div>
					<div class="like-btn-space"></div>
					<div class="rtcp-vod-like-count">{{likes_count}}</div>
				</div>
                <div class="rtcp-vod-share-btn rtcp-demo-vod-icon-share dN" tooltip-title="{{tp_share}}"></div>
            </div>`,

		SharePopup :
			`<div class="rtcp-share-popup-overlay rtcp-share-popup-hidden"></div>
			<div class="rtcp-share-popup rtcp-share-popup-hidden">
                <div class="rtcp-share-popup-title-sec center">
                    <span class="rtcp-share-popup-title center">Share</span>
                    <span class="rtcp-close-share-popup center"></span>
                </div>
                <div class="rtcp-share-popup-content-sec">
                    <div class="rtcp-share-popup-videolink-sec">
                        <div class="rtcp-share-popup-videolink-title">Video link</div>
                        <div class="center rtcp-share-popup-videolink"><input class="rtcp-share-popup-videolink-input" readonly="" value="https://youtu.be/BS8x2TicxQ8?si=zxpWdLHGKsByMGBz"></div>
                    </div>
                    <div class="rtcp-share-popup-videolink-bottom-sec center">
                        <div class="rtcp-share-popup-videolink-starttime-sec center">
                          <span><input type="checkbox" checked="" class="rtcp-share-popup-videolink-starttime-tickicon center"></span>
                          <span>Starts at <span class="rtcp-share-popup-videolink-starttime">10:04</span></span>
                        </div>
                        <div class="rtcp-share-popup-videolink-copysec center">
                          <div class="rtcp-share-popup-videolink-embed-btn center">Embed</div>
                          <div class="rtcp-share-popup-videolink-copy-btn center"">Copy</div>
                        </div>
                    </div>
                </div>
            </div>`,

		sorting :
			`<div class="rtcp-vod-sort-content" category="{{category}}">{{sorting_options}}</div>`,

		postStatsSection :
			`<div class="rtcp-vod-video-posted-details-sec center">
                <div class="rtcp-vod-video-posted-views-sec center dN">
                    <div class="rtcp-vod-video-posted-views-title">{{total_views_title}}</div>
                    <div class="rtcp-vod-video-posted-views">{{total_view_count}}</div>
                </div>
                <div class="rtcp-vod-video-posted-details-separator dN"></div>
                <div class="rtcp-vod-video-posted-date-sec center">
                    <div class="rtcp-vod-video-posted-date-title">{{posted_on_title}}</div>
                    <div class="rtcp-vod-video-posted-date">{{date}}</div>
                    <div class="rtcp-vod-video-posted-time">{{time}}</div>
                </div>
            </div>`,

		commentsSection :
			`<div class="rtcp-vod-comment-sec">
            	{{header}}
            	<div class="rtcp-vod-viewers-comment-sec">{{comments_list}}</div>
          	</div>`,

		commentsHeader :
			`<div class="rtcp-vod-comment-sec-header">
            	<div class="rtcp-vod-total-comments-count-sec rtcp-demo-vod-icon-comment center">
                	<span class="rtcp-vod-total-comments-count">{{comments_count}}</span><span>{{comments_title}}</span>
              	</div>
            </div>`,

		commentBox :
			`<div class="rtcp-self-comment-box-sec">
				<div class="rtcp-self-comment-sec">
					<div class="rtcp-self-commenter-profile"><img src="{{user_img}}"></div>
					<div class="rtcp-self-commenter-box-sec">
						<div class="rtcp-self-commenter-box" rtcpvodactionbtn purpose="startCommentEdit">
							<div class="rtcp-self-commenter-box-input-sec" aria-label="{{drop_comment_desc}}"></div>
						</div>
						<div class="rtcp-self-commenter-box-emojis rtcp-demo-vod-icon-emojis dN" tooltip-title="{{tp_reactions}}"></div>
					</div>
				</div>
			</div>`,

		addCommentActions :
			`<div class="rtcp-self-comment-actions">
              	<div class="rtcp-self-comment-cancel-btn" {{cancel_action}}>Cancel</div>
             	<div class="rtcp-self-comment-btn" rtcpvodactionbtn_md purpose="{{proceed_action}}">{{action_title}}</div>
            </div>`,

		viewerComment :
			`<div id="{{id}}" class="rtcp-vod-viewers-comment-box">
				<div class="rtcp-comment-wrapper">
					<div class="rtcp-vod-viewers-comment-profile">
						<img src="{{user_img}}">
					</div>
					<div class="rtcp-vod-viewers-info-sec">
						<div class="rtcp-vod-viewers-info">
							<div class="rtcp-vod-viewers-name">{{user_name}}</div>
							<div class="rtcp-vod-viewers-commented-time">{{time}}</div>
							{{comment_self_actions}}
						</div>
						<div class="rtcp-vod-viewers-comments-outer rtcp-vod-self-reply">
							<div class="rtcp-vod-viewers-comment">
								<div class="rtcp-viewer-commenter-box-input-sec">{{comment}}</div>
								<div class="rtcp-viewer-comment-readmore dN" rtcpvodactionbtn purpose="toggleCommentReadMore">Read more</div>
								<div class="rtcp-self-commenter-box-emojis" tooltip-title="Reactions"></div>
							</div>
							{{comment_actions}}
						</div>
					</div>
				</div>
			</div>`,

		commentActions :
			`<div class="rtcp-self-comment-actions-outer dN">
				<div class="rtcp-comment-actions">
					<div class="rtcp-demo-vod-icon-comment-like">Like</div>
					<div class="rtcp-demo-vod-icon-comment-dislike">Dislike</div>
					<div class="rtcp-demo-vod-icon-comment-reply" rtcpvodactionbtn purpose="replyComment">Reply</div>
				</div>
			</div>`,

		commentSelfActions :
			`<div class="rtcp-vod-more-opt-cont" comment_id="{{comment_id}}">
				<div class="rtcp-vod-opt-cont" rtcpvodactionbtn purpose="editComment">
					<div class="rtcp-vod-opt rtcp-demo-vod-icon-edit">Edit</div>
				</div>
				<div class="rtcp-vod-opt-cont" rtcpvodactionbtn purpose="deleteComment">
					<div class="rtcp-vod-opt rtcp-demo-vod-icon-delete" >Delete</div>
				</div>
			</div>`,

		videoQueuePanel :
			`<div class="rtcp-vod-viewerpage-playlist-sec">
				{{queue_header}}
				<div class="rtcp-vod-viewerpage-nextvideos-sec">
					<div class="rtcp-vod-viewerpage-nextvideos-list center"></div>
				</div>
			</div>`,

		queueHeader :
			`<div class="rtcp-vod-viewerpage-rhs-header center">
				<div class="rtcp-vod-morevideos">{{more_videos_title}}</div>
				<div class="rtcp-vod-autoplay center dN">
					<div class="rtcp-vod-autoplay-title">{{autoplay_title}}</div>
					<div class="">
						{{slider}}
					</div>
				</div>
          	</div>`,

		videoGridContainer :
			`<div id="{{id}}" class="rtcp-grid-video-box rtcp-grid-video-fileformat-box" {{purpose}}>
				<div class="rtcp-grid-video-box-wrapper">
					<div class="rtcp-grid-video-img-container rtcp-vod-status-container">
						<div class="rtcp-grid-video-box-img">
							<img src="{{img_src}}" onload="{{bg_img_onload}}" onerror="{{bg_img_onerror}}">
						</div>
						<div class="rtcp-grid-video-box-owner-tag center">
							<div class="rtcp-grid-video-owner-profile center"><img src="{{user_img}}"></div>
							<div class="rtcp-grid-video-ownername">{{user_name}}</div>
						</div>
						<div class="rtcp-grid-video-duration">{{duration}}</div>
						{{overlay_options}}
					</div>
					<div class="rtcp-grid-video-details">
						<div class="rtcp-grid-video-details-header">
							<div class="rtcp-grid-video-title">{{title}}</div>
							{{edit_option}}
						</div>
						<div class="rtcp-grid-video-time-and-views center">
						{{views_count}}
						<span class="rtcp-grid-video-date ellipsis">{{date}}</span>
						<span class="dot-separator"></span>
						<span class="rtcp-grid-video-time">{{time}}</span>
						</div>
					</div>
					<div class="rtcp-grid-video-fileformat-img videoimg "></div>
				</div>
            </div>`,

		videoBoxWaveIcon :
			`<div class="rtcp-vod-video-box-wave-icon">
				<div class="wave-bars">
					<div class="wave-bar"></div>
					<div class="wave-bar"></div>
					<div class="wave-bar"></div>
					<div class="wave-bar"></div>
				</div>
			</div>`,

		videoGridOverlayOpt :
			`<div class="rtcp-grid-vod-main-options">{{main_opt}}</div>
			<div class="rtcp-grid-video-overlay-options">
				<div class="rtcp-grid-video-overlay-bg"></div>
				<div class="rtcp-grid-video-more-options rtcp-demo-vod-icon-comment-actions center curP" rtcpvodactionbtn purpose="openStudioMoreOpt"></div>
			</div>`,

		videoGridOpt :
			'<div class="rtcp-grid-video-{{key}} {{hide_class}} center rtcp-demo-vod-icon-{{key}} curP" more_opt="{{key}}" rtcpvodactionbtn="" purpose="{{purpose}}"></div>',

		videoGridContainerStatus :
			`<div class="rtcp-grid-video-status center">
				<div class="rtcp-demo-vod-upload-state-video-icon center"></div>
				<div class="rtcp-grid-video-status-text"></div>
			</div>`,

		uploadProgressBar :
			`<div class="rtcp-grid-video-upload-progress center">
				<div class="rtcp-demo-vod-icon-upload center"></div>
			</div>`,

		uploadProgressBar_v2 :
			`<div class="rtcp-grid-video-upload-progress center">
				<div class="progress-percentage">0%</div>
				<div class="rtcp-demo-vod-icon-upload center"></div>
			</div>`,

		loader :
			`<div class="rtcp-demo-vod-modal-loader" style="/* display: none; */">
				<div class="rtcp-demo-vod-modal-loader-sec">
					<div class="rtcp-demo-vod-modal-loader-cont-dot"></div>
					<div class="rtcp-demo-vod-modal-loader-cont-dot"></div>
					<div class="rtcp-demo-vod-modal-loader-cont-dot"></div>
					<div class="rtcp-demo-vod-modal-loader-cont-dot"></div>
				</div>
			</div>`,

		videoLinkPopup :
			`<div class="rtcp-share-popup">
				<div class="rtcp-share-popup-title-sec center">
					<span class="rtcp-share-popup-title center">{{share_title}}</span>
					<span class="rtcp-close-share-popup center"></span>
				</div>
				<div class="rtcp-share-popup-content-sec">
					<div class="rtcp-share-popup-videolink-sec">
						<div class="rtcp-share-popup-videolink-title">{{video_link_title}}</div>
						<div class="center rtcp-share-popup-videolink">
							<input class="rtcp-share-popup-videolink-input" readonly="" value="{{video_link}}"/>
						</div>
					</div>
					<div class="rtcp-share-popup-videolink-bottom-sec center">
						<div class="rtcp-share-popup-videolink-starttime-sec center dN">
							<span><input type="checkbox" checked="" class="rtcp-share-popup-videolink-starttime-tickicon center" /></span>
							<span>{{starts_title}}<span class="rtcp-share-popup-videolink-starttime">{{time}}</span></span>
						</div>
						<div class="rtcp-share-popup-videolink-copysec center">
							<div class="rtcp-share-popup-videolink-embed-btn center dN">{{embed_title}}</div>
							<div class="rtcp-share-popup-videolink-copy-btn center">{{copy_title}}</div>
						</div>
					</div>
				</div>
			</div>`,

		banner :
			`<div class="rtcp-demo-vod-banner" status="{{status}}">
				<div class="rtcp-demo-vod-icon-banner"></div>
				<div class="rtcp-demo-vod-banner-text">{{msg}}</div>
			</div>`,

		pages :
			`<div class="rtcp-vod-pagination center">
				<div class="rtcp-vod-page-navigation-cont">
					<div class="rtcp-vod-page-navigator center rtcp-demo-vod-icon-left" value="prev" rtcpvodactionbtn purpose="navigatePage"></div>
					<div class="rtcp-vod-pages center"></div>
					<div class="rtcp-vod-page-navigator center rtcp-demo-vod-icon-right" value="next" rtcpvodactionbtn purpose="navigatePage"></div>
				</div>
				<div style="" class="rtcp-vod-skip-to-page center">
					<div class="rtcp-vod-skip-to-page-input"><input type="text" style=""></div>
					<div style="" class="rtcp-vod-skip-to-page-go center" rtcpvodactionbtn purpose="goToPage">Go</div>
				</div>	
			</div>`,

		pageSizeDropdown :
			`<div class="rtcp-vod-page-size-selector-dropdown-cont center">
				<div class="rtcp-vod-page-size-selector center" rtcpvodactionbtn="" purpose="togglePageSizeDropdown">
					<div class="rtcp-vod-page-size-selector-dropdown-title">Show</div>
					<div class="rtcp-vod-page-size">20</div>
					<div class="rtcp-demo-vod-icon-dropdown-icon2 center rtcp-vod-page-size-dropdown-icon"></div>
				</div>
			</div>`, //<div class="rtcp-vod-size-opt">10</div>
		
		pageSizeDropdownOpt:
			`<div class="rtcp-vod-page-size-selector-dropdown">
				<div class="rtcp-vod-page-size-opts center" category="{{category}}">{{options}}</div>
			</div>`,

		homePanelNoData :
			`<div class="rtcp-vod-home-no-data-sec center">
				<div class="rtcp-vod-home-no-data-icon center"></div>
			</div>`,

		categoryPanelSkeleton :
			`<div class="rtcp-vod-category-skeleton">
				<div class="rtcp-vod-category-skeleton-header">
					<div class="rtcp-vod-category-skeleton-title skeleton"></div>
				</div>
				<div class="rtcp-vod-category-skeleton-contents">{{contents}}</div>
			</div>`,

		videoBoxSkeleton :
			`<div class="rtcp-vod-category-skeleton-video-box">
				<div class="rtcp-vod-category-skeleton-wrapper skeleton">
					<div class="rtcp-vod-category-skeleton-img skeleton"></div>
					<div class="rtcp-vod-category-skeleton-footer">
						<div class="rtcp-vod-category-skeleton-footer-title skeleton"></div>
						<div class="rtcp-vod-category-skeleton-footer-info skeleton"></div>
					</div>
				</div>
			</div>`,

		deleteConfirmPopup :
			`<div class="rtcp-vod-confirm-popup-overlay"></div>
			<div class="rtcp-vod-confirm-popup">
				<div class="rtcp-vod-confirm-popup-header">
					<span class="rtcp-vod-confirm-popup-title">{{title}}</span>
					<div class="rtcp-demo-vod-icon-close center" rtcpvodactionbtn purpose="closeConfirmPopup"></div>
				</div>
				<div class="rtcp-vod-confirm-popup-body">
					<span>{{message}}</span>
				</div>
				<div class="rtcp-vod-confirm-popup-footer">
					<div class="rtcp-vod-confirm-popup-cancel" rtcpvodactionbtn purpose="closeConfirmPopup">{{cancel_text}}</div>
					<div class="rtcp-vod-confirm-popup-confirm" rtcpvodactionbtn purpose="{{confirm_purpose}}">{{confirm_text}}</div>
				</div>
			</div>`,

		zohoCelebrationBanner :
			`<div class="rtcp-vod-zoho-celebrations" style="">
				<div class="geometric-shape diamond-1"></div>
				<div class="geometric-shape diamond-2"></div>
				<div class="geometric-shape circle-1"></div>
				<div class="geometric-shape circle-2"></div>
				<div class="float-dot dot-1"></div>
				<div class="float-dot dot-2"></div>
				<div class="float-dot dot-3"></div>
				<div class="float-dot dot-4"></div>
				<div class="glass-container">
					<div class="celebration-text">
						<div class="zoho">ZOHO</div>
						<div class="celebration">CELEBRATIONS</div>
					</div>
				</div>
			</div>`
	}

	const _templatesConfigs = (() => 
	{
		const footerPurpose =
		{
			preview : ['Next', 'openUploadModal', true],
			meta : ['Next', 'openEnhancementModal'],
			inVideo : ['Let&#39;s Go', 'goViewerPageFromStudio'],
			uploadMeta : ['Upload', 'initiateUpload'],
			updateMeta : ['Update', 'updateMetaInfo'],
			upload_failed : ['Retry', 'retryUpload'],
			cancel : ['Cancel', 'cancelUpload'],
			back : ['Back', 'openMetaInfoModal']
		};

		const gridVideoContOpts =
		{
			edit : ['edit', 'openGridVideo', 'Edit'], 
			delete : ['delete', 'deleteContent', 'Delete'],
			view : ['view', 'openViewerPage', 'Watch on Playhub'],
			cancel : ['cancel', 'cancelUpload', 'Cancel']
		}

		return {
			footerPurpose : footerPurpose,
			gridVideoContOpts : gridVideoContOpts
		};
	})()

	const _getHeader_v2 = function(userImgUrl)
	{
		const originalUrl = window.location.origin;

		return $RTCPTemplate.replace(_templates_v2.vodHeader, {
			home_href : '',//originalUrl + "/demo/playhub",
			logo_img_src : originalUrl+"/images/landingpage/vod.svg",
			alt_text : 'Zoho RTCPLATFORM - Video On Demand',
			video_ondemand_title : 'Video-On-Demand',
			user_img_src : userImgUrl,
			theme_switcher : _getThemeSwitcher()
		}, "InSecureHTML");
	}

	const _getThemeSwitcher = function()
	{
		return _templates_v2.vodTheme_v1;
	}

	const _getVodHomePanel = function()
	{
		return $RTCPTemplate.replace(_templates_v2.homePanel, {
			home_title : "Home",
			my_video_title : "My Videos",
			upload_title : "Upload"
		}, "InSecureHTML");
	}

	const _getVideoCategoryPanel = function(category, title, count)
	{
		return $RTCPTemplate.replace(_templates_v2.videoCategory, {
			category : category,
			title : title,
			count : count,
			page_size_dropdown : _getPageSizeDropdown(category)
		}, "InSecureHTML");
	}

	var _getVideoUploadModal = function()
	{
		return _templates_v2.videoUploadModal;
	};

	const _getVodStudioModal = function(modal, id, content) // preview, uploadMeta, meta
	{
		return $RTCPTemplate.replace(_templates_v2.vodStudioModal, {
			title : VODProcessXss.processXSS(content.title || content.tempTitle) || '',
			modal : modal,
			content_id : id,
			// custom_mini_class : isPreview ? 'dN' : '', // <div class="rtcp-demo-vod-icon-minimise center {{custom_mini_class}}" rtcpvodactionbtn purpose="toggleMiniMaxModal"></div>
			close_purpose : 'closeStudioModal', //(isPreview || modal == 'uploadMeta') ? 'cancelUpload' : 'closeStudioModal',
			meta_info_rhs : _getStudioModalRHS(modal, content),
			footer_action_btns : _getStudioModalFooter(modal, content.status)
		}, "InSecureHTML");
	};

	const _getStudioModalRHS = function(modal, content)
	{
		if(modal == 'preview')
		{
			return '';
		}

		if(modal == 'meta' || modal == 'uploadMeta') // meta info
		{
			return _getvideoMetaModalRHS(content);
		}

		if(modal == 'inVideo') // in video info
		{
			return _getEnhancementModalRHS(content);
		}
	}

	const _getModalSlider = function()
	{
		return _templates_v2.modalSlider;
	}

	// const _getvideoMetaModalRHS_v1 = function (content)
	// {
	// 	const title = content.title || content.tempTitle;
		
	// 	return $RTCPTemplate.replace(_templates_v2.videoMetaModalRHS,{
	// 		title : VODProcessXss.processXSS(title) || '',
	// 		description : content.description ? VODProcessXss.processXSS(content.description) : ''
	// 	});
	// }

	const _getvideoMetaModalRHS = function (content)
	{
		return _templates_v2.videoMetaModalRHS;
	}

	const _getEnhancementModalRHS = function()
	{
		return _templates_v2.enhancementModalRHS;
	}

	const _getStudioModalFooter = function(modal, status)
	{
		const getBtn = (config, isSecondary, isDisabled) =>
		{
			return $RTCPTemplate.replace('<div class="rtcp-demo-vod-video-cont-detail-{{btn_class}} {{disabled}}" rtcpvodactionbtn purpose="{{purpose}}"><div>{{title}}</div></div>', 
			{
				btn_class : isSecondary ? 'back' : 'next',
				title : config[0],
				purpose : config[1],
				disabled: isDisabled ? 'disabled' : ''
			}, "InSecureHTML");
		}

		let secondaryAction;
		let disabled = false;

		if(modal === 'uploadMeta')
		{
			const isUploading = (status === vodDemoConstant.status.UPLOADING);

			if(status === vodDemoConstant.status.PREVIEW || isUploading)
			{
				secondaryAction = 'cancel';
			}
			else
			{
				modal = 'updateMeta';
			}

			if(status !== vodDemoConstant.status.PREVIEW)
			{
				disabled = true;
			}
		}
		else if(modal === 'inVideo')
		{
			secondaryAction = 'back';
		}

		const configs = _templatesConfigs.footerPurpose;
		const config = configs[modal];

		if(!config)
		{
			return '';
		}

		return (secondaryAction ? getBtn(configs[secondaryAction], true) : '') + getBtn(config, false, disabled);
	}

	var _getChapterInfo = function(id, title, description, duration)
	{
		const divTitle = VODProcessXss.processXSS(title);
		const divDescription = VODProcessXss.processXSS(description);

		// const html = $RTCPTemplate.replace(`<div class="rtcp-vod-chapter-detail-info">
		// 	<div class="rtcp-vod-chapter-detail-row">
		// 		<div class="rtcp-vod-chapter-detail-label">Title :</div>
		// 		<div class="rtcp-vod-chapter-detail-value">{{title}}</div>
		// 	</div>
		// 	<div class="rtcp-vod-chapter-detail-row">
		// 		<div class="rtcp-vod-chapter-detail-label">Description :</div>
		// 		<div class="rtcp-vod-chapter-detail-value">{{description}}</div>
		// 	</div>
		// 	<div class="rtcp-vod-chapter-detail-row">
		// 		<div class="rtcp-vod-chapter-detail-label">Duration :</div>
		// 		<div class="rtcp-vod-chapter-detail-value">{{duration}}</div>
		// 	</div>
		// </div>`,{
		// 	title : divTitle,
		// 	description : divDescription,
		// 	duration : duration
		// });

		const html = $RTCPTemplate.replace(`<div class="rtcp-vod-chapter-detail-info">
			<div class="rtcp-vod-chapter-detail-row">
				<span class="rtcp-vod-chapter-detail-label">Title : </span><span>{{title}}</span>
			</div>
			<div class="rtcp-vod-chapter-detail-row">
				<span class="rtcp-vod-chapter-detail-label">Description : </span><span>{{description}}</span>
			</div>
			<div class="rtcp-vod-chapter-detail-row">
				<span class="rtcp-vod-chapter-detail-label">Duration : </span><span>{{duration}}</span>
			</div>
		</div>`,{
			title : divTitle,
			description : divDescription,
			duration : duration
		});

		return $RTCPTemplate.replace(_templates_v2.chapterInfo, {
			id : id,
			duration: duration,
			title: divTitle,
			description: html//divDescription
		}, "InSecureHTML");
	}

	var _getAddChapterModal = function()
	{
		return $RTCPTemplate.replace(_templates_v2.addChapterModal, {
		}, "InSecureHTML");
	}

	const _getSorterTemplate = function(configs)
	{
		html = '';

		for(const confObj of configs)
		{
			html += $RTCPTemplate.replace('<div class="rtcp-vod-sort-dropdwncontent {{custom_class}}" value="{{value}}" desc="{{desc}}" rtcpvodactionbtn purpose="sortByOption">{{title}}</div>', {
				value : confObj.sortKey,
				desc : String(confObj.desc),
				custom_class : (configs.activeTitle === confObj.title) ? 'active' : '',
				title : confObj.title
			}, "InSecureHTML");
		}

		return $RTCPTemplate.replace(_templates_v2.sorting, {
			sorting_options : html,
			category : configs.category
		}, "InSecureHTML");
	}

	const _getPlayerLoader = function()
	{
		return _templates_v2.playerLoader;
	}
	
	const _getViewerPage = function(id, session, data)
	{
		return $RTCPTemplate.replace(_templates_v2.viewerPage, {
			video_content_section: _getVideoContentSection(id, session, data),
			comments_section: _getCommentsSection(session, 0)
			//loader : _getPlayerLoader()
		}, "InSecureHTML");
	}

	const _getVideoContentSection = function(id, session, data)
	{
		return $RTCPTemplate.replace(_templates_v2.videoContentSection, {
			player_id : id,
			content_panel: _getContentPanel(data, session)
		}, "InSecureHTML");
	}

	const _getContentPanel = function(data, session)
	{
		//const description = data.description || '';

		//const description = VODProcessXss.processXSS('Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.').trim();

		return $RTCPTemplate.replace(_templates_v2.contentPanel, {
			title: VODProcessXss.processXSS(data.title),
			//description: VODProcessXss.processXSS(description),
			owner_panel: _getOwnerPanel(data, session),
			post_stats: _getPostStatsSection(data)
		}, "InSecureHTML");
	}

	const _getOwnerPanel = function(data, session)
	{
		return $RTCPTemplate.replace(_templates_v2.ownerPanel, {
			user_name: VODProcessXss.processXSS(data.ownerDisplayName),
			user_img : session.getUserImage(data.owner),
			followers_count : '0',
			followers_title : "Followers",
			follow_title : "Follow",
			likes_count : 0,//data.videolikecount,
			tp_like : "Like",
			tp_share : "Share"
		}, "InSecureHTML");
	}

	const _getPostStatsSection = function(data)
	{
		return $RTCPTemplate.replace(_templates_v2.postStatsSection, {
			total_views_title: "Total Views :",
			total_view_count: 0,//data.viewcount,
			posted_on_title: "Posted on",
			date: data.date,
			time: data.time,
			view_analytics_title: "View analytics"
		}, "InSecureHTML");
	}

	const _getCommentsSection = function(session, commentsCount)
	{
		return $RTCPTemplate.replace(_templates_v2.commentsSection, {
			header : _getCommentsHeader(commentsCount),
			//comment_box : _getCommentBox(session.getUserImage()),
			comments_list: ""
		}, "InSecureHTML");
	}

	const _getCommentsHeader = function(commentsCount)
	{
		return $RTCPTemplate.replace(_templates_v2.commentsHeader, {
			comments_count: commentsCount,
			comments_title: "Comments",
			sort_by_title: "Sort by"
		}, "InSecureHTML");
	}

	const _getCommentBox = function(userImg)
	{
		return $RTCPTemplate.replace(_templates_v2.commentBox, {
			user_img : userImg,
			cancel_title: "Cancel",
			comment_title: "Comment",
			tp_reactions: "Reactions",
			drop_comment_desc: "Drop your comments here"
		}, "InSecureHTML");
	}

	const _getAddCommentActions = function(config)
	{
		return $RTCPTemplate.replace(_templates_v2.addCommentActions, {
			action_title : config[0],
			proceed_action: config[1],
			cancel_action: config[2] ? `rtcpvodactionbtn purpose='${config[2]}'` : '' // Assuming config[2] contains the cancel action purpose
		}, "InSecureHTML");
	}

	const _getViewerCommentBox = function(session, id, commentInfo)
	{
		var userId = commentInfo.userid;

		if(userId.startsWith('RT'))
		{
			userId = userId.split('_')[2];
		}

		const isCurrentUser = session.isCurrentUser(userId);

		return $RTCPTemplate.replace(_templates_v2.viewerComment, {
			id : id,
			user_img : session.getUserImage(userId),
			user_name : isCurrentUser ? 'You' : VODProcessXss.processXSS(commentInfo.dname),
			time : vodDemo.parseCommentTime(commentInfo.time),
			comment : VODProcessXss.processXSS(commentInfo.comment) || "",
			comment_self_actions: isCurrentUser ? '<div class="rtcp-vod-viewers-comment-actions rtcp-demo-vod-icon-comment-actions" rtcpvodactionbtn purpose="openSelfCommentActions"></div>' : "", // isCurrentUser
			comment_actions : _getCommentActions()
		}, "InSecureHTML");
	}

	const _getSelfCommentActionsPopup = function(id)
	{
		return $RTCPTemplate.replace(_templates_v2.commentSelfActions, {
			comment_id : id
		}, "InSecureHTML");
	}

	const _getCommentActions = function()
	{
		return $RTCPTemplate.replace(_templates_v2.commentActions, {}, "InSecureHTML");
	}

	const _getVideoQueuePanel = function()
	{
		return $RTCPTemplate.replace(_templates_v2.videoQueuePanel, {
			queue_header: _getQueueHeader()
		}, "InSecureHTML");
	}

	const _getQueueHeader = function()
	{
		return $RTCPTemplate.replace(_templates_v2.queueHeader, {
			more_videos_title: "More Videos",
			autoplay_title: "Autoplay",
			slider: _getCheckboxSlider()
		}, "InSecureHTML");
	}

	const _getVideoGridViewerHtml = function(count)
	{
		return $RTCPTemplate.replace(`<div class="rtcp-grid-video-viewcount center">{{view_count}}<span>{{views_title}}</span></div><span class="dot-separator"></span>`, {
			view_count : count,
			views_title: (count > 1) ? "views" : 'view'
		}, "InSecureHTML");
	}

	const _getVideoGridContainer = function(session, id, info, purpose)
	{
		const viewCountHtml = (typeof info.viewcount !== 'undefined') ? _getVideoGridViewerHtml(info.viewcount) : '';
		const opts = vodDemo.getMoreOptions(session, info, 'home') || [];

		return $RTCPTemplate.replace(_templates_v2.videoGridContainer, {
			id : id,
			purpose : purpose ? `rtcpvodactionbtn purpose="${purpose}"` : '',
			img_src : info.img || vodDemo.getCDNDomain()+`/images/landingpage/vod/video_card_bg_${vodDemo.getRandomBg()}.svg`,     //|| `https://img.freepik.com/free-photo/_${vodDemo.getRandomBg()}.jpg`,
			bg_img_onload : `vodDemo.handleBgImgLoad(this, false)`,  //NO I18N
			bg_img_onerror : `vodDemo.handleBgImgLoad(this, true)`,  //NO I18N
			user_name : VODProcessXss.processXSS(info.ownerDisplayName),
            user_img : session.getUserImage(info.owner),
			duration : info.duration || '00:00',
			title : VODProcessXss.processXSS(info.title || info.tempTitle || ''),
			views_count : viewCountHtml,
			date : info.date,
			time : info.time,
			overlay_options : _getVideoGridOverlayOpt(opts),
			edit_option : _getVideoGridContainerOpt('edit', !opts.includes('edit'))
		}, "InSecureHTML");
	}

	const _getVideoGridContainerOpt = function(optKey, hide)
	{	
		const [key, purpose] = _templatesConfigs.gridVideoContOpts[optKey];

		return $RTCPTemplate.replace(_templates_v2.videoGridOpt,{
			key : key,
			purpose : purpose,
			hide_class : hide ? 'dN' : ''
		}, "InSecureHTML");
	}

	const _getVideoGridOverlayOpt = (opts) =>
	{
		return $RTCPTemplate.replace(_templates_v2.videoGridOverlayOpt,{
			main_opt : _getVideoGridContainerOpt(opts.includes('view') ? 'view' : 'edit')
			//main_opt_hide_class : '',
			//overlay_hide_class : (opts.length) ? '' : 'dN'
		}, "InSecureHTML");
	}

	const _getVideoBoxWaveIcon = function()
	{
		return _templates_v2.videoBoxWaveIcon;
	}

	// const _getVideoGridOverlayOpt = (moreOpts = {}) =>
	// {	
	// 	const overlayOpts = ['edit', 'view'];
	// 	var html = '';

	// 	for(const opt of overlayOpts)
	// 	{
	// 		const config = moreOpts[opt];

	// 		if(!config)
	// 		{
	// 			continue;
	// 		}

	// 		html += `<div class="rtcp-grid-video-${opt} center rtcp-demo-vod-icon-${opt} curP" more_opt="${opt}" rtcpvodactionbtn purpose="${config[0]}"></div>`
	// 	}

	// 	if(!html)
	// 	{
	// 		return html;
	// 	}

	// 	return $RTCPTemplate.replace(_templates_v2.videoGridOverlayOpt,{
	// 		overlay_options : html
	// 	}, "InSecureHTML");
	// }

	const _getVideoGridContainerStatus = function(status)
	{
		return _templates_v2.videoGridContainerStatus;
	}

	const _getUploadProgressBar = function()
	{
		//<span class="progress-icon rtcp-demo-vod-icon-upload"></span>
		return _templates_v2.uploadProgressBar;
	}

	const _getPageLoader = function()
	{
		return _templates_v2.loader;
	}

	const _getCheckboxSlider = function()
	{
		return _templates_v2.slider;
	}

	const _getVideoLinkPopup = function(videoLink, time)
	{
		return $RTCPTemplate.replace(_templates_v2.videoLinkPopup, {
			share_title : "Share",
			video_link_title : "Video link",
			video_link : videoLink,
			starts_title : "Starts at ",
			time : time,
			embed_title : "Embed",
			copy_title : "Copy"
		}, "InSecureHTML");
	}

	const _getVodBanner = function(msg, isErr)
	{
		return $RTCPTemplate.replace(_templates_v2.banner, {
			msg : msg,
			status : isErr ? 'error' : 'success' // success, error
		}, "InSecureHTML");
	}

	const _getPaginationTemplate = function()
	{
		return _templates_v2.pages;
	}

	const _getPageSizeDropdown = function(category)
	{
		const sorter = vodDemo.getCurrentSorter();
		const selected = sorter.getPageConfig(category, 'size');

		return $RTCPTemplate.replace(_templates_v2.pageSizeDropdown, {
			selected_option : selected
		}, "InSecureHTML");
	}

	const _getPageSizeDropdownOpts = function(category)
	{
		const sorter = vodDemo.getCurrentSorter();
		const options = vodDemo.getDefaultConfig('pageSizes');
		const selected = sorter.getPageConfig(category, 'size');
		let optionsHtml = '';
		
		
		for(const size of options)
		{
			if(size == selected)
			{
				continue;
			}

			optionsHtml += $RTCPTemplate.replace('<div class="rtcp-vod-size-opt" value="{{value}}" rtcpvodactionbtn purpose="selectPageSize">{{title}}</div>', {
				value : size,
				title : size
			}, "InSecureHTML");
		}

		return $RTCPTemplate.replace(_templates_v2.pageSizeDropdownOpt, {
			options : optionsHtml,
			category : category
		}, "InSecureHTML");
	}

	const _getcategoryPanelSkeleton = function()
	{
		const contentsHtml = _templates_v2.videoBoxSkeleton.repeat(5);

		return $RTCPTemplate.replace(_templates_v2.categoryPanelSkeleton, {
			contents : contentsHtml
		}, "InSecureHTML");
	}

	const _getVideoBoxSkeleton = function()
	{
		return _templates_v2.videoBoxSkeleton;
	}

	const _getVodHomePanelNoData = function(isInHome)
	{	
		return _templates_v2.homePanelNoData;
	}

	const _getTemplatesConfigs = () =>
	{
		return _templatesConfigs;
	}

	const _getDeleteConfirmPopup = function(commentId)
	{
		return $RTCPTemplate.replace(_templates_v2.deleteConfirmPopup, {
			title : 'Delete Comment',
			message : 'Are you sure you want to delete this comment?',
			cancel_text : 'Cancel',
			confirm_text : 'Delete',
			confirm_purpose : 'confirmDeleteComment'
		}, "InSecureHTML");
	}

	const _getZohoCelebrationBanner = () =>
	{
		return _templates_v2.zohoCelebrationBanner;
	}
    
    return  {
		getHeader_v2 : _getHeader_v2,
		getVodHomePanel : _getVodHomePanel,
		getVideoCategoryPanel : _getVideoCategoryPanel,
		getVideoUploadModal : _getVideoUploadModal,
		getvideoMetaModalRHS : _getvideoMetaModalRHS,
		getVodStudioModal : _getVodStudioModal,
		getStudioModalRHS : _getStudioModalRHS,
		getModalSlider : _getModalSlider,
		getvideoMetaModalRHS : _getvideoMetaModalRHS,
		getEnhancementModalRHS : _getEnhancementModalRHS,
		getStudioModalFooter : _getStudioModalFooter,
		getSlider : _getCheckboxSlider,
		// getUploadDraftModal : _getUploadDraftModal,
		getAddChapterModal : _getAddChapterModal,
		getChapterInfo : _getChapterInfo,
		getSorterTemplate : _getSorterTemplate,
		getViewerPage : _getViewerPage,
		getVideoGridContainer : _getVideoGridContainer,
		getVideoGridOverlayOpt : _getVideoGridOverlayOpt,
		getVideoGridContainerOpt : _getVideoGridContainerOpt,
		getVideoGridContainerStatus : _getVideoGridContainerStatus,
		getUploadProgressBar : _getUploadProgressBar,
		getVideoQueuePanel : _getVideoQueuePanel,
		getCommentBox : _getCommentBox,
		getAddCommentActions : _getAddCommentActions,
		getViewerCommentBox : _getViewerCommentBox,
		getSelfCommentActionsPopup : _getSelfCommentActionsPopup,
		getCommentActions : _getCommentActions,
		getPageLoader : _getPageLoader,
		getVideoLinkPopup : _getVideoLinkPopup,
		getVodBanner : _getVodBanner,
		getPaginationTemplate : _getPaginationTemplate,
		getPageSizeDropdownOpts : _getPageSizeDropdownOpts,
		getcategoryPanelSkeleton : _getcategoryPanelSkeleton,
		getVideoBoxSkeleton : _getVideoBoxSkeleton,
		getVodHomePanelNoData : _getVodHomePanelNoData,
		getTemplatesConfigs : _getTemplatesConfigs,
		getVideoBoxWaveIcon : _getVideoBoxWaveIcon,
		getDeleteConfirmPopup : _getDeleteConfirmPopup,
		getZohoCelebrationBanner : _getZohoCelebrationBanner
    };
}());


var VODProcessXss = {
	
	processXSS : function(value, ignoredecode )
		{
			if ( !value ) {
				return value;
			}
			if(value && (value instanceof String || typeof value == 'string'))
			{
				if ( !ignoredecode ) {
					value = VODProcessXss.decodeHTMLEntities( value );
				}
				return value.replace( /&/g, "&amp;" ).replace( /\"/g, "&quot;" ).replace( /\'/g, "&#39;" ).replace( /</g, "&lt;" ).replace( />/g, "&gt;" );
			}
			return value;
		},
		
		decodeHTMLEntities : function(value)
		{
			return value
			.replace(/&#x2F;/g, "/")
			.replace(/&#39;|&#x27;/g, "'")
			.replace(/&quot;/g, '"')
			.replace(/&gt;/g, ">")
			.replace(/&lt;/g, "<")
			.replace(/&amp;/g, "&");
		}
};

// {
//     "opr": "handleVODStatus",
//     "messageTime": 1759749448480,
//     "uploadId": "mediaprocessing.RT_15600382.1759749444717",
//     "module": "vod",
//     "contentId": "ef6be6bb-f8e7-4b97-ac44-c6f1f3a8442a_27975657",
//     "status": 2
// }


//$Id$

var ZRVOD = 
{
    initVODViewer (contentKey, userTokenDetails, elementId, playerConfig, playerEvents)
    {
        var session = new ZRVODViewer(contentKey, userTokenDetails);

        session.initVodPlayer(elementId, playerConfig, playerEvents);
        
        if(userTokenDetails.contentId)
        {
            session._contentId = undefined;
            return session;
        }

        session.getInfo();
        return session;
    },

    initVODStudio (contentKey, userTokenDetails, elementId, playerConfig, playerEvents)
    {
        var session = new ZRVODStudio(contentKey, userTokenDetails);

        session.initVodPlayer(elementId, playerConfig, playerEvents);

        if(userTokenDetails.contentId)
        {
            session._contentId = undefined;
            return session;
        }

        session.getInfo();
        return session;
    }
}

class ZRVODViewer
{
    constructor(contentKey, userTokenDetails)
    {
        this._contentKey = contentKey;
        this._pbToken = userTokenDetails.pbToken;
        this._userId = userTokenDetails.userId;
        this._wssUrl = userTokenDetails.wssUrl;
        
        this._mediaPlayerObj =
        {
            configs : {},
            mediaPlayer : undefined,
            bindEvents : {}
        }

        this._contentId = userTokenDetails.contentId;
        this._acl = undefined;
        this._chaptersList = {};
        this._pendingChapters = {}; // Chapters which are not yet uploaded to server.
        this._comments = {};

        this._reqTypes =
        {
            POST: 'POST',
            GET: 'GET',
            PUT : 'PUT',
            DELETE : 'DELETE'
        };
        
        this._actionReqTypes =
        {
            CHAPTER : "chapter",
            COMMENT : "comment"
        }

        this._eventEmitter = new ZREventEmitter();

        //this.getInfo();

        if(!this._contentId)
        {
            this.getInfo();
        }
    }

    getWSSUrl ()
    {
        return this._wssUrl;
    }

    getEmitter ()
    {
        return this._eventEmitter;
    }

    getUserId ()
    {
        return this._userId;
    }

    getMediaPlayer ()
    {
        return this._mediaPlayerObj.mediaPlayer;
    }

    getPlayerCurrentSeedTime () 
    {
        return this.getMediaPlayer()._videoInstance.currentTime;
    }

    getChapter(id)
    {
        var chapter = this.getChapters()[id];

        if(!chapter)
        {
            chapter = this.getPendingChapters()[id];
        }

        return chapter;
    }

    getPendingChapters()
    {
        return this._pendingChapters;
    }

    getChapters()
    {
        return {...this._chaptersList, ...this._pendingChapters}; // Merge chapters and pending chapters
    }

    getComments()
    {
        return this._comments;
    }

    getCommentsCount()
    {
        return Object.keys(this._comments).length;
    }
    
    ZRVODApi (urlPath, type, data = {}, successCB, errorCB)
    {
        const headers = Object.assign({"x-pbtoken" : this._pbToken}, data.headers);
        
        if(Array.isArray(urlPath))
        {
            urlPath = urlPath.join("/");
        }
        else
        {
            urlPath = this._contentId + "/" + urlPath;
        }

        $.ajax({
            url : "/_wmsrtc/v2/vod/" + urlPath, // No I18N
            type : type,
            data : data.payLoad,
            contentType : "", // NO I18N
            headers : headers,
            success : function(resp)
            {
                if(typeof successCB === "function") // No I18N
                {
                    successCB(resp);
                }
            },
            error : function(errorResp)
            {
                if(typeof errorCB === "function") // No I18N
                {
                    errorCB(errorResp);
                }
            }
        });
    }

    displayChapters ()
    {
        const mediaPlayer = this.getMediaPlayer();
        const chaptersList = {...this.getChapters(), ...this.getPendingChapters()}; // Merge chapters and pending chapters
        var data = [];

        for(var id in chaptersList)
        {
            const chapter = chaptersList[id];

            chapter.title = $RTCPWC.$CUtil.processXSS(chapter.title); // Sanitize chapter title to prevent XSS attacks
            chapter.description = $RTCPWC.$CUtil.processXSS(chapter.description); // Sanitize chapter description to prevent XSS attacks

            data.push({
                "module": "Chapter",
                "eventid": id,
                "offset_in_sec": chapter.offset,
                "data": chapter
            });
        }

        if(mediaPlayer instanceof RTCMediaPlayerObj)
        {
            mediaPlayer.getCustomEventsData = () =>
            {
                return {
                    "videokey": this._contentKey,
                    "data": data,
                    "successcallback": ()=>{},
                    "failurecallback":()=>{}
                }
            }
        
            mediaPlayer.loadEvents();
        }
    }

    loadChapters (successCB, failureCB)
    {
        let successCallback = (resp) =>
        {
            if(typeof resp !== "string")
            {
                if(typeof successCB === 'function') // since request is successful, successCB should be called
                {
                    successCB();
                }

                return;
            }

            let msgObj;
            let chapters = {};

            resp.split("\n").forEach(msg => 
            {
                if(msg.trim())
                {
                    msgObj = JSON.parse(msg);
                    msgObj = JSON.parse(msgObj.msg.msg);

                    let id = Math.random().toString(12).substring(2);
                    chapters[id] = JSON.parse(msgObj.data);
                }
            });

            this._chaptersList = chapters;  
            this.displayChapters(); 

            if(typeof successCB === 'function')
            {
                successCB(this.getChapters());
            }
        }
        
        this.ZRVODApi(this._actionReqTypes.CHAPTER, this._reqTypes.GET, undefined, successCallback, failureCB);
    }
    
    getInfo ()
    {
        var urlPath = [this._userId, "getinfo"];
        var data = { payLoad : { pbtoken : this._pbToken }};

        const successCallback = (resp) =>
        {
            this._contentId = resp.contentid;
            this._acl = resp.vieweracl;

            this._eventEmitter.emit("handleSessionReady", this);
        }

        const errorCB = (errorResp) =>
        {
            this._eventEmitter.emit("handleInvalidSession", this, errorResp);
        }

        this.ZRVODApi(urlPath, this._reqTypes.GET, data, successCallback, errorCB);
    }

    initVodPlayer (playerDivId, playerConfig = {}, customPlayerEvents = {})
    {
        if(typeof playerDivId !== 'string' || !playerDivId.trim()) // " " not valid 
        {
            return;
        }

        const mediaPlayer = new RTCMediaPlayerObj(playerDivId);
        const session = this;

        const config = 
        {
            title : "enable",                       //No I18N
            keycontrols : "enable",                 //No I18N
            seekbar : "enable",                     //No I18N
            tooltip : "enable",                     //No I18N
            time : "enable",                        //No I18N
            pauseOrPlay : "enable",                 //No I18N
            volume : "enable",                      //No I18N
            playbackspeed : "enable",               //No I18N
            minimisePlayer : "enable",              //No I18N
            maximisePlayer : "enable",              //No I18N
            bottomControls : "enable",              //No I18N
            pictureInPicture : "enable",            //No I18N
            seperatePlaybackSpeed : "enable",       //No I18N
            settings : "enable",                    //No I18N
            qualityInSettings : "enable",           //No I18N
            hls : "enable",                         //No I18N
            popEnabled : "enable",                  //No I18N
            closeNeeded : "disable",                 //No I18N
            events : "enable",                      //No I18N
            customEvents : "enable"                 //No I18N
        };

        if(Object.keys(playerConfig).length)
        {
            this._mediaPlayerObj.configs = playerConfig;
        }

        var playerCallback = () =>
        {
            Object.assign(config, this._mediaPlayerObj.configs);
            mediaPlayer.setPlayerConfig(config);
            mediaPlayer.playContent(this._contentKey, this._pbToken, this._wssUrl, this._userId);
        }

        const customEventCB = function (funcName, args = [])
        {
            let eventFunc = this._mediaPlayerObj.bindEvents[funcName];
            if(eventFunc)
            {
                eventFunc(...args);
            }
        }

        const vodPlayerEvents = 
        {
            getTooltipContent (eventtime, eventid, eventmodule, eventdata)
            {
                if(!eventid)
                {
                    return "";
                }

                let customEvent = session._mediaPlayerObj.bindEvents.getTooltipContent;

                if(customEvent)
                {
                    return customEvent(eventtime, eventid, eventmodule, eventdata);
                }

                return '<div class="rtcp-mp-tooltip-bg" style="width: 158px;height: 90px;background-position : center;background-repeat : no-repeat;background-color: transparent;background-size: cover;"></div>'+
                        '<div class="rtcp-mp-tooltip-text-wrapper" style="color: #eee;margin-top: 4px;">'+    
                        '<div class="rtcp-mp-tooltip-title"><span>'+eventdata.title+'</span></div>'+
                        '<span class="rtcp-mp-tooltip-text" style="height: 19px;">'+eventtime+'</span></div>';
            },

            onPlay ()
            {
                customEventCB.call(session, "onPlay");
            }
        };

        for(let event in vodPlayerEvents)
        {
            mediaPlayer[event] = vodPlayerEvents[event];
        }

        if(Object.keys(customPlayerEvents).length)
        {
            this._mediaPlayerObj.bindEvents = {};
        }
        else
        {
            customPlayerEvents = this._mediaPlayerObj.bindEvents;
        }

        for(let event in customPlayerEvents)
        {
            let bindEvent = customPlayerEvents[event];

            if(typeof bindEvent === 'function')
            {
                if(!this._mediaPlayerObj.bindEvents[event])
                {
                    this._mediaPlayerObj.bindEvents[event] = bindEvent;
                }

                if(typeof vodPlayerEvents[event] !== 'function')
                {
                    mediaPlayer[event] = bindEvent;
                }
            }
        }

        this._mediaPlayerObj.mediaPlayer = mediaPlayer;
        playerCallback();
    }

    swapVodPlayerContainer (playerDivId)
    {
        const mediaPlayer = this.getMediaPlayer();
        const newPlayerDOM = $("#" + playerDivId);

        if(!(mediaPlayer instanceof RTCMediaPlayerObj) || !newPlayerDOM.length)
        {
            return;
        }

        var oldPlayerId = mediaPlayer.getMediaPlayerDivID();
        var oldPlayerDOM = $("#" + oldPlayerId);

        if(oldPlayerDOM.length && mediaPlayer.isEventsLoaded)
        {   
            let eventCont = oldPlayerDOM.children('#event_cont_'+ oldPlayerId);
            eventCont.attr("id", "event_cont_" + playerDivId);
            newPlayerDOM.append(oldPlayerDOM.children(`[mediaplayerid="${oldPlayerId}"]`)).append(eventCont);
            
            if(RTCMediaPlayerObjList[mediaPlayer.mediaPlayerDiv])
            {
                RTCMediaPlayerObjList[playerDivId] = mediaPlayer;
                delete RTCMediaPlayerObjList[mediaPlayer.mediaPlayerDiv];
            }
            
            newPlayerDOM.find('[mediaplayerid]').attr("mediaplayerid", playerDivId);
        }
        else
        {
            mediaPlayer.isCustomDiv = true;
            
            if(RTCMediaPlayerObjList[mediaPlayer.mediaPlayerDiv])
            {
                RTCMediaPlayerObjList[mediaPlayer.mediaPlayerDiv].closeMediaPlayer(false);
            }
        }

        mediaPlayer.mediaPlayerDiv = playerDivId;
    }

    play ()
    {
        const mediaPlayer = this.getMediaPlayer();

        if(mediaPlayer instanceof RTCMediaPlayerObj)
        {
            mediaPlayer.play();
        }
    }

    pause ()
    {
        const mediaPlayer = this.getMediaPlayer();

        if(mediaPlayer instanceof RTCMediaPlayerObj)
        {
            mediaPlayer.pause();
        }
    }

    closePlayer (clearBindEvents, clearConfigs)
    {
        let mediaPlayer = this.getMediaPlayer();

        if(mediaPlayer instanceof RTCMediaPlayerObj)
        {
            mediaPlayer.closeMediaPlayer(false);
            this._mediaPlayerObj.mediaPlayer = undefined;
            
            if(clearBindEvents)
            {
                this._mediaPlayerObj.bindEvents = {};
            }

            if(clearConfigs)
            {
                this._mediaPlayerObj.configs = {};
            }
        }
    }

    addComment (commentObj, successCb, errorCb)
    {
        let msg = commentObj.msg;
        let data = { payLoad : JSON.stringify({comment : msg}) };

        const errorCallback = (error) =>
        {
            if(typeof errorCb === "function")
            {
                errorCb(error);
            }
        }

        const successCallback = (resp) =>
        {
            let msgId = resp.msgid;

            if(typeof msgId === 'undefined')
            {   
                errorCallback();
                return;
            }

            const id = msgId.split("%")[1];

            const commentInfo = 
            {
                dname : commentObj.dname, 
                userid : this.getUserId(),
                comment : msg, 
                time : Date.now().toString(),
                msgid : msgId
            };

            this._comments[id] = commentInfo;
            
            if(typeof successCb === "function")
            {
                successCb(id, commentInfo);
            }
        }

        this.ZRVODApi(this._actionReqTypes.COMMENT, this._reqTypes.POST, data, successCallback, errorCallback);
    }

    loadComments (successCb, failureCB)
    {   
        let successCallback = (resp) =>
        {
            if(typeof resp !== "object" || !Array.isArray(resp.data))
            {
                if(typeof successCb == "function")
                {
                    successCb(this._comments);
                }

                return;
            }

            const data = resp.data;

            for(const comment of data)
            {
                if(typeof comment.msgid === 'undefined' || typeof comment.msg === 'undefined')
                {
                    continue;
                }

                const id = comment.msgid.split("%")[1];
                
                this._comments[id] =
                {
                    dname : comment.dname, 
                    userid : comment.sender,
                    comment : comment.msg, 
                    time: comment.time,
                    msgid : comment.msgid
                };
            }

            if(typeof successCb == "function")
            {
                successCb(this._comments);
            }
        }

        this.ZRVODApi(this._actionReqTypes.COMMENT, this._reqTypes.GET, undefined, successCallback, failureCB);
    }

    editComment (msgObj, successCb, errorCb)
    {
        const comments = this.getComments();
        const commentInfo = comments[msgObj.id];

        msgObj.id = commentInfo.msgid; // msgid is required to identify the comment in backend and update it, so assigning msgid to id before sending the request. --- No I18N

        var data = {payLoad : JSON.stringify(msgObj)};
        
        const successCallback = (resp) =>
        {
            const status = resp.status;

            if(status)
            {
                commentInfo.comment = msgObj.comment;
                commentInfo.time = Date.now().toString();

                if(typeof successCb === "function")
                {
                    successCb(resp);
                }
            }
            else
            {
                if(typeof errorCb === "function")
                {
                    errorCb();
                }
            }
        }

        this.ZRVODApi(this._actionReqTypes.COMMENT, this._reqTypes.PUT, data, successCallback, errorCb);
    }

    deleteComment (msgObj, successCb, errorCb)
    {
        const comments = this.getComments();
        const commentInfo = comments[msgObj.id];
        const commentId = msgObj.id;

        msgObj.id = commentInfo.msgid; // msgid is required to identify the comment in backend and update it, so assigning msgid to id before sending the request. --- No I18N

        const data = {payLoad : JSON.stringify(msgObj)};

        const successCallback = (resp) =>
        {
            const status = resp.status;

            if(status)
            {
                delete comments[commentId];

                if(typeof successCb === "function")
                {
                    successCb(resp);
                }
            }
            else
            {
                if(typeof errorCb === "function")
                {
                    errorCb();
                }
            }
        }

        this.ZRVODApi(this._actionReqTypes.COMMENT, this._reqTypes.DELETE, data, successCallback, errorCb);
    }

    terminate ()
    {
        const mediaPlayer = this.getMediaPlayer();

        if(mediaPlayer instanceof RTCMediaPlayerObj)
        {
            mediaPlayer.closeMediaPlayer(false);
        }
        
        for(let prop in this)
        {
            if(this.hasOwnProperty(prop))
            {
                delete this[prop];
            }
        }
    }
}

class ZRVODStudio extends ZRVODViewer
{
    constructor(contentKey, userTokenDetails)
    {
        super(contentKey, userTokenDetails);
    }

    addChapter (chapterObj)
    {
        if(typeof chapterObj === "object")
        {
            Object.assign(this._pendingChapters, chapterObj);
        }

        this.displayChapters();
    }

    removeChapter (id)
    {
        delete this.getPendingChapters()[id];
        this.displayChapters();
    }
    
    uploadChapters (successCB, failureCB)
    {
        const chaptersList = this.getPendingChapters();
        const chapters = [];

        for(let id in chaptersList)
        {
            chapters.push(chaptersList[id]);
        }
        
        const successCallback = (resp) =>
        {
            Object.assign(this._chaptersList, chaptersList) 
            this._pendingChapters = {}; // Clear pending chapters after successful upload.

            if(typeof successCB === 'function')
            {
                successCB(resp);
            }
        }

        var data = { payLoad : JSON.stringify({chapters}) };
        
        this.ZRVODApi(this._actionReqTypes.CHAPTER, this._reqTypes.POST, data, successCallback, failureCB);
    }
};//$Id$

var vodDemoHandler = {};
var vodDemoApi = {};
var vodDemoUtils = {};

var vodDemoConstant = (function () 
{
    const status =
    {
        PREVIEW : 'preview',
        UPLOADING : 'uploading',
        UPLOADED : 'uploaded',
        UPLOAD_FAILED : 'upload_failed',
        PROCESSING : 'processing',
        PROCESSING_FAILED : 'processing_failed',
        COMPLETED : 'completed',
        ERROR : 'error'
    };

    const UIConstants =  
    {
        HOME : 'home',
        MY_VIDEOS : 'myVideos',
        VIEWER : 'viewer',
        ROOT : 'root',
        HEADER : 'header',
        COMMENT_SEC : 'comment_sec',
        DESC_SEC : 'desc_sec',
        QUEUE : 'queue',
        VIEWER_RHS : 'viewer_rhs'
    }

    const statusVsCategory =
    { 
        'COMPLETED' : status.COMPLETED,
        'NOT_YET_STARTED' : status.PROCESSING
    };

    const categoryConstants =
    {
        1 : status.UPLOADING,
        2 : status.UPLOADED,
        3 : status.UPLOAD_FAILED,
        4 : status.PROCESSING,
        5 : status.PROCESSING_FAILED,
        6 : status.COMPLETED
    };

    const categoryVsTitle =
    {
        [status.COMPLETED] : 'Published',
        [status.PROCESSING] : 'In Progress',
        [status.UPLOADING] : 'Upload Queue'
    };

    const categoryMapping =
    {
        [status.PREVIEW] : status.UPLOADING,
        [status.UPLOAD_FAILED] : status.UPLOADING,
        [status.UPLOADED] : status.PROCESSING,
        [status.PROCESSING_FAILED] : status.PROCESSING
    }

    const getCategoryGroup = (category) => categoryMapping[category] || category;

    const getCategoryTitle = (category) =>
    {
        const categoryGroup = getCategoryGroup(category);
        return categoryVsTitle[categoryGroup];
    }

    return {
        status,
        statusVsCategory,
        categoryConstants,
        UIConstants,
        getCategoryGroup,
        getCategoryTitle
    }
})();

var vodDemoHandler =
{
    UI :
    {
        goToUploadModal : function(elem, event)
        {
            if(!vodDemo.isUploadAllowed())
            {
                return;
            }

            elem.addClass('disabled');
            
            const root = vodDemo.getDOM(vodDemoConstant.UIConstants.ROOT);
            
            root.find('.rtcp-demo-vod-upload-dialog').remove();

            const errorCB = () =>
            {
                elem.removeClass('disabled');
                vodDemo.pushNotification('Error while initiating upload. Please try again.', true);
            }

            const successCB = (resp) =>
            {
                if(!resp || (typeof resp.data === undefined) || (typeof resp.data.videoPropId == undefined))
                {
                    errorCB();
                    return;
                }

                elem.removeClass('disabled');
                
                root.append("<div class='rtcp-vod-container-hidden'></div>");
                root.append(VODTemplate.getVideoUploadModal());
                vodDemo.bindUploadEvents(resp.data);
            };

            vodDemoApi.getUploadId(successCB, errorCB);
        },

        openMetaInfoModal : function(elem, event)
        {
            const id = elem.closest('.rtcp-demo-vod-studio-modal').attr('contentId');
            vodDemo.openVODStudioModal('meta', id);
        },

        openEnhancementModal : function(elem, event)
        {
            const id = elem.closest('.rtcp-demo-vod-studio-modal').attr('contentId');
            vodDemo.openVODStudioModal('inVideo', id);
        },

        openGridVideo : function(elem, event)
        {
            const id = elem.closest('.rtcp-grid-video-box').attr('id') || elem.closest('#rtcp-vod-studio-more-opt').attr('contentId');
            const session = vodDemo.getVodDemoSession();
            const content = session.getVodContent(id);
            const contentStatus = content.status;

            const modal = (contentStatus == "completed") ? 'meta' : 'uploadMeta'; //'inVideo' : 'uploadMeta';

            vodDemo.openVODStudioModal(modal, id);
            vodDemoHandler.UI.handleClickOnVodDemo();
        },

        openStudioMoreOpt : function(elem, event)
        {
            const root = vodDemo.getDOM('root');
            const gridVideo = elem.closest('.rtcp-grid-video-box');
            const contentId = gridVideo.attr('id');
            
            var moreOptElem = root.find('#rtcp-vod-studio-more-opt');
            const hasLength = moreOptElem.length > 0;

            if(hasLength && moreOptElem.attr('contentId') === contentId)
            {
                vodDemoHandler.UI.handleClickOnVodDemo();
                return;
            }

            const session = vodDemo.getVodDemoSession();
            const content = session.getVodContent(contentId);
            const moreOpts = vodDemo.getMoreOptions(session, content);

            if(!moreOpts.length)
            {
                vodDemoHandler.UI.handleClickOnVodDemo();
                return;
            }

            const configs = VODTemplate.getTemplatesConfigs().gridVideoContOpts;
            var optsHTML = '';

            for(const opt of moreOpts)
            {
                const config = configs[opt];
                
                optsHTML += `<div class="rtcp-vod-opt-cont" more_opt="${opt}" rtcpvodactionbtn purpose="${config[1]}">
                                <div class="rtcp-vod-opt rtcp-demo-vod-icon-${opt}">${config[2]}</div>
                            </div>`;
            }

            if(!hasLength)
            {
                moreOptElem = $(`<div id="rtcp-vod-studio-more-opt" contentId="${contentId}" class="rtcp-vod-more-opt-cont"></div>`);
            }
            
            moreOptElem.html(optsHTML);
            root.append(moreOptElem);

            const clientBoundingRect = elem[0].getBoundingClientRect();
            const elemLeft = clientBoundingRect.left;
            const top = clientBoundingRect.top;
            let left = elemLeft + clientBoundingRect.width + 15;
            const moreOptElemWidth = moreOptElem.outerWidth();

            const categoryPanel = gridVideo.closest('.rtcp-grid-video-items');
            const categoryPanelBoundry = categoryPanel.innerWidth() +  categoryPanel.offset().left;

            if(categoryPanelBoundry < (left + moreOptElemWidth))
            {
                left = elemLeft - moreOptElemWidth - 7;
            }

            moreOptElem.css({ top : top + 'px', left : left + 'px' });

            if(event.clientX + moreOptElem.width() > vodDemo.getDOM(vodDemoConstant.UIConstants.HOME).innerWidth())
            {
                moreOptElem.css('right','40px');
            }

            gridVideo.addClass('more-opt-active');

            if(hasLength)
            {   
                const oldContentId = moreOptElem.attr('contentId');

                moreOptElem.attr('contentId', contentId).addClass('more-opt-active');
                $('#'+oldContentId).removeClass('more-opt-active');
                return;
            }

            vodDemoUtils.clickOutside.bind(
            {
                elem : moreOptElem, 
                doNotClose : (event) => 
                {
                    return $(event.target).closest(moreOptElem).length;
                }, 
                onClose : () => 
                {
                    gridVideo.removeClass('more-opt-active').find('[more_opt]').off('mouseover mouseleave');
                }
            });
        },

        openAddChapterModal : function(elem, event)
        {
            const studioModal = elem.closest('.rtcp-demo-vod-studio-modal');
            const chapterModal = studioModal.find('.rtcp-demo-vod-add-chapters-modal');
            const chapterCont = elem.closest('.rtcp-demp-vod-add-chapter-elem');
            
            const session = vodDemo.getVodDemoSession();
            const contentId = studioModal.attr('contentId');
            const content = session.getVodContent(contentId);
            const contentStudio = content.vodStudio;

            const setAddChapterTime = (time) =>
            {
                const formattedTime = vodDemo.parseOrFormatTime(time).split(':');
                const timerSecs = chapterModal.find('.rtcp-demo-vod-add-chapters-modal-body-footer-sec-timer input').get();

                timerSecs.map((input, index) => {
                    input.value = formattedTime[index];
                });
            }

            if(chapterCont.length)
            {
                const chapterId = chapterCont.attr('id');
                const chapter = content.vodStudio.getChapter(chapterId);

                chapterModal.find('.vod-chapter-title textarea').val(chapter.title || '');
                chapterModal.find('.vod-chapter-description textarea').val(chapter.description || '');
                chapterModal.attr('chapterId', chapterId);

                setAddChapterTime(chapter.offset);
            }
            else if(contentStudio)
            {
                const currentTime = contentStudio.getPlayerCurrentSeedTime();
                
                if(typeof currentTime === 'number' && currentTime > 0)
                {
                    setAddChapterTime(currentTime);
                }
            }

            chapterModal.removeClass('dN')
            
            chapterModal.find('textarea').trigger('input');
        },

        deleteChapter : function(elem, event)
        {
            const studioModal = elem.closest('.rtcp-demo-vod-studio-modal');
            const chapterElem = elem.closest('.rtcp-demp-vod-add-chapter-elem');
            const chaperId = chapterElem.attr('id');
            const cancelUpdate = chapterElem.siblings().length == 0;

            const session = vodDemo.getVodDemoSession();
            const content = session.getVodContent(studioModal.attr('contentId'));

            content.vodStudio.removeChapter(chaperId);

            if(cancelUpdate)
            {
                studioModal.find('.rtcp-demo-vod-video-cont-detail-next').attr('purpose', 'goViewerPageFromStudio').text(VODProcessXss.decodeHTMLEntities("Let&#39;s Go"));
            }

            chapterElem.remove();
        },

        toggleTheme : function(elem, event)
        {
            vodDemo.setTheme(true);
        },

        closeAddChapterModal : function(elem, event)
        {
            const studioModal = elem.closest('.rtcp-demo-vod-studio-modal');
            const chapterModal = studioModal.find('.rtcp-demo-vod-add-chapters-modal');

            chapterModal.find('textarea').val('');
            chapterModal.find('input').val('00');
            chapterModal.addClass('dN');
        },

        updateChapters : function (elem, event)
        {
            const studioModal = elem.closest('.rtcp-demo-vod-studio-modal');
            const contentId = studioModal.attr('contentId');
            const content = vodDemo.getVodDemoSession().getVodContent(contentId);
            const studio = content && content.vodStudio;
            const primaryBtn = studioModal.find('.rtcp-demo-vod-video-cont-detail-next');

            if(studio)
            {
                primaryBtn.addClass('disabled');

                const successCB = (resp) =>
                {
                    primaryBtn.removeClass('disabled');
                    primaryBtn.text(VODProcessXss.decodeHTMLEntities("Let&#39;s Go"));
                    primaryBtn.attr('purpose', 'goViewerPageFromStudio');
                    vodDemo.pushNotification('Chapters updated successfully.');
                }

                const errorCB = (err) =>
                {
                    primaryBtn.removeClass('disabled');
                    vodDemo.pushNotification("Error while updating chapters. Please try again.", true);
                }

                studio.uploadChapters(successCB, errorCB);
            }

            vodDemoHandler.UI.closeAddChapterModal(elem);
        },

        toggleChapterDescription : function (elem, event)
        {
            const parentCont = elem.closest('.rtcp-demp-vod-add-chapter-elem');
            const isDescOpen = parentCont.hasClass('desc-active');

            parentCont.toggleClass('desc-active', !isDescOpen);
            elem.attr('rtcp_demo_tooltip', isDescOpen ? 'open' : 'close');
        },

        toggleViewerDescription : function(elem, event)
        {
            const contentId = vodDemo.getDOM('viewer').attr('contentId');
            const content = vodDemo.getVodDemoSession().getVodContent(contentId);
            const descCont = vodDemo.getDOM(vodDemoConstant.UIConstants.DESC_SEC);
            const descriptionCont = descCont.find('.rtcp-vod-video-desc');
            const description = $RTCPWC.$CUtil.processXSS(content.description || '');
            const isExpandedAlready = (descriptionCont.attr('expanded') === 'true');
            const readMoreElem = descriptionCont.find('.rtcp-vod-video-desc-read-more').detach().text(isExpandedAlready ? 'show less' : '...more');

            const maxDescLen = vodDemo.getContentConfig('length', 'max_description');
            const newText = isExpandedAlready ? description.slice(0, maxDescLen) : description;
            
            descriptionCont.html(newText);
            readMoreElem.text(isExpandedAlready ? '...more' : 'show less');
            descriptionCont.append(readMoreElem);
            descriptionCont.attr('expanded', !isExpandedAlready);
        },

        goViewerPageFromStudio : function (elem, event)
        {
            const studioModal = elem.closest('.rtcp-demo-vod-studio-modal');
            const contentId = studioModal.attr('contentId');
            const session = vodDemo.getVodDemoSession();
            const content = session.getVodContent(contentId);
            const propId = content.videoPropId;
            const viewUrlPath = `/${propId}/view`;

            vodDemo.removeModal(contentId);
            vodDemo.pushHistoryState({propId}, 'Playhub', viewUrlPath);
            vodDemo.openViewerPage(contentId);
        },

        openViewerPage : function(elem, event)
        {
            const moreOptElem = elem.closest('#rtcp-vod-studio-more-opt');
            const isFromContOpts = (moreOptElem.length > 0);
            const id = isFromContOpts ? moreOptElem.attr('contentId') : elem.closest('.rtcp-grid-video-box').attr('id');
            const session = vodDemo.getVodDemoSession();
            const propId = session.getVodContent(id).videoPropId;

            if(!propId)
            {
                return;
            }

            const viewUrlPath = `/${propId}/view`;

            if(isFromContOpts)
            {
                $(`<a href="${window.location.origin}/demo/playhub${viewUrlPath}" target="_blank" style="display:none;"></a>`)[0].click();
                vodDemoHandler.UI.handleClickOnVodDemo();
                return;
            }

            vodDemo.pushHistoryState({propId}, 'Playhub', viewUrlPath);
            vodDemo.openViewerPage(id);
        },

        playFromViewerPage : function(elem, event)
        {
            const id = elem.closest('.rtcp-grid-video-box').attr('id');
            const session = vodDemo.getVodDemoSession();
            const propId = session.getVodContent(id).videoPropId;
            const videoSec = elem.attr('sec');
            const key = videoSec === 'related' ? 'relatedVideosConf' : 'queueConf';
            const isPublic = Boolean((vodDemo.getViewerState() || {})[key].scope);

            vodDemo.pushHistoryState({propId, isPublic}, 'Playhub', `/${propId}/view`);
            vodDemo.openViewerPage(id, videoSec);
        },

        openHomePage : function(elem, event)
        {
            const homePathName = '/demo/playhub';

            if(window.location.pathname === homePathName)
            {
                return;
            }

            vodDemo.pushHistoryState({}, 'RTCP VOD', '');
            vodDemo.openHomePage();
        },

        openHomePageSortingOpt : function (elem, event)
        {
            vodDemo.openHomePageSortingOpt(elem);
        },

        sortByOption : function (elem, event)
        {
            const closeCB = () => vodDemoHandler.UI.handleClickOnVodDemo();

            if(elem.hasClass('active'))
            {
                closeCB();
                return;
            }

            const category = elem.closest('[category]').attr('category');
            const sortKey = elem.attr('value');
            const order = elem.attr('desc') === "true" ? 'desc' : 'asc';
            const config = vodDemo.getDefaultConfig('sorterConfig').get(sortKey, order);

            vodDemo.reArrangeContentsInCategory(category, config);
            closeCB();
        },

        handleClickOnVodDemo : function(elem, event)
        {
            const blurHandler = vodDemo.getBlurHandler();
            blurHandler.focusHandler.call(blurHandler);

            vodDemoUtils.clickOutside.close.call(vodDemoUtils.clickOutside, event);
        },

        switchTabs : function(elem, event)
        {
            vodDemo.switchTabs(elem, true);
            vodDemoHandler.UI.handleClickOnVodDemo();
        },

        slideCategoryPanel : function(elem, event, onComplete)
        {
            const parentCont = elem.closest('.rtcp-grid-video-items');
            const listCont = parentCont.find('.rtcp-grid-video-items-body');

            const args = listCont.is(':visible') ? ['slideUp', 180] : ['slideDown', 0];

            listCont[args[0]]({complete : onComplete});
            elem.css('transform', 'rotate('+args[1]+'deg)');
            vodDemoHandler.UI.handleClickOnVodDemo();
        },

        openUploadModal : function(elem, event)
        {
            const id = elem.closest('.rtcp-demo-vod-studio-modal').attr('contentId');
            
            requestAnimationFrame(() => {
                vodDemo.openVODStudioModal('uploadMeta', id);
            });
        },

        initiateUpload : function(elem, event)
        {
            const modal = elem.closest('.rtcp-demo-vod-studio-modal');
            const id = modal.attr('contentId');

            elem.addClass('disabled');
            vodDemo.initiateUpload(id, modal);
        },

        updateMetaInfo : function(elem, event)
        {
            const modal = elem.closest('.rtcp-demo-vod-studio-modal');
            const id = modal.attr('contentId');

            elem.addClass('disabled restricted');
            vodDemo.updateMetaInfo(id, elem, modal);
        },

        closeStudioModal : function(elem, event)
        {
            const id = elem.closest('.rtcp-demo-vod-studio-modal').attr('contentId');
            vodDemo.removeModal(id);
        },

        toggleEnchanceModalRhs : function(elem, event)
        {
            const parent = elem.closest('[modal]');
            const isMinimised = parent.hasClass('rhs-inactive');

            parent.toggleClass('rhs-inactive', !isMinimised);
        },

        switchPage : function(elem, event)
        {
            const page = elem.text();
            const category = elem.parents('.rtcp-grid-video-items').attr('category');
            
            vodDemo.switchPage(category, page);
        },

        navigatePage : function(elem, event)
        {
            const sorter = vodDemo.getCurrentSorter();
            const category = elem.parents('.rtcp-grid-video-items').attr('category');
            const isNext = (elem.attr('value') === 'next');
            const pageNo = sorter.getCurrentPageNo(category) + (isNext ? 1 : -1);

            vodDemo.switchPage(category, pageNo);
        },

        goToPage : function(elem, event)
        {   
            vodDemo.switchPage(elem.parents('.rtcp-grid-video-items').attr('category'), elem.siblings().find('input').val());
        },

        togglePageSizeDropdown : function(elem, event)
        {
            const root = vodDemo.getDOM(vodDemoConstant.UIConstants.ROOT);
            var dropDownOpts = root.find('.rtcp-vod-page-size-selector-dropdown');
            const isActive = (dropDownOpts.length > 0);
            const category = elem.parents('.rtcp-grid-video-items').attr('category');

            vodDemoHandler.UI.handleClickOnVodDemo();

            if(isActive && dropDownOpts.find('[category]').attr('category') === category)
            {
                return;
            }
            
            dropDownOpts = $(VODTemplate.getPageSizeDropdownOpts(category));

            elem.addClass('active');
            root.append(dropDownOpts);

            const clientRect = elem[0].getBoundingClientRect();
            
            const top = clientRect.top + clientRect.height + 7;
            const right = root.outerWidth() - clientRect.right;

            dropDownOpts.css('top', top+'px');
            dropDownOpts.css('right', right+'px');

            vodDemoUtils.clickOutside.bind(
            {
                elem : dropDownOpts,
                doNotClose : (event) => 
                {
                    return ($(event.target).closest(elem).length > 0);
                },
                onClose : () => 
                {
                    elem.removeClass('active');
                }
            });
        },

        selectPageSize : function(elem, event)
        {
            const pageSize = parseInt(elem.attr('value'));
            const category = elem.parent().attr('category');

            vodDemo.changePageSize(category, {pageSize});
            vodDemo.setCategoryPanelHeight(category);

            vodDemo.getDOM('home').find('.rtcp-grid-video-items[category="'+category+'"] .rtcp-vod-page-size').text(pageSize);
            vodDemo.setDefaultConfig("defaultPageSize", pageSize);
            
            vodDemoUtils.clickOutside.close.call(vodDemoUtils.clickOutside);
        },

        toggleLikeStatus : function(elem, event)
        {
            const isLiked = elem.attr('status') === 'liked';
            const parent = elem.parent();
            
            elem.attr('status', isLiked ? '' : 'liked');
            parent.attr('tooltip-title', isLiked ? 'Like' : 'Unlike').find('.rtcp-vod-like-count').text(isLiked ? 0 : 1);
        },

        toggleCommentReadMore : function(elem, event)
        {
            const comment = elem.closest('.rtcp-vod-viewers-comment').find('.rtcp-viewer-commenter-box-input-sec').first();

            if(comment.length === 0)
            {
                return;
            }

            const isExpanded = comment.hasClass('rtcp-comment-expanded');

            comment.toggleClass('rtcp-comment-expanded', !isExpanded);
            comment.toggleClass('rtcp-comment-collapsed', isExpanded);
            elem.text(isExpanded ? 'Read more' : 'Read less');

            if(isExpanded)
            {
                comment.scrollTop(0);
            }
        },

        startCommentEdit : function(elem, event)
        {
            const editable = elem.find('.rtcp-self-commenter-box-input-sec');

            if(elem.hasClass('active'))
            {
                editable.focus();
                return;
            }

            editable.attr('contenteditable', true).focus();
            vodDemoUtils.resetCursorPosition(editable.get(0), undefined, true);

            const parent = elem.closest('.rtcp-self-comment-box-sec');
            const actions = $(VODTemplate.getAddCommentActions(['Comment', 'postComment'])).attr('id', 'rtcp-vod-self-comment-actions');
            
            parent.append(actions);
            vodDemoUtils.bindTextListeners(
            {
                elem : editable,
                limit : vodDemo.getDefaultConfig('studioConfig', 'length', 'comment'),
                limitExceedError : { errContClass : "rtcp-self-commenter-box" },
                onTextChange : (value, length, limit) => 
                {
                    parent.toggleClass('selfcomment-inactive', !(length > 0));
                }
            });

            editable.off('.selfCommentState'); // removing any existing event handlers with the same namespace to avoid multiple handlers getting attached which can happen when user clicks on edit comment multiple times without posting or cancelling the previous comment  
            
            elem.addClass('active');

            const blurHandler = vodDemo.getBlurHandler();
            const onBlurListener = function ()
            {
                if(elem.hasClass('active') && document.activeElement === editable.get(0))
                {
                    blurHandler.setLastActiveElem(editable);
                    blurHandler.setEventState(true);
                    return true;
                }
            };

            const closeEdit = () =>
            {
                blurHandler.unbindListener(onBlurListener); // remove the exact listener reference from the array
                editable.off('.selfCommentState');
                elem.removeClass('active').off('mousedown');
                editable.blur().removeAttr('contenteditable');
                actions.remove();
                editable.html('');
            };

            actions.find('.rtcp-self-comment-cancel-btn').on('click', function()
            {
                closeEdit();
            });

            blurHandler.bindListener(onBlurListener);
            editable.trigger('input'); // to set the initial state of post comment button
        },

        cancelUpload : function(elem, event)
        {
            const contentId = elem.closest('[contentId]').attr('contentId');
            
            vodDemoHandler.UI.handleClickOnVodDemo();
            
            if(typeof contentId !== 'undefined')
            {
                vodDemo.cancelUpload(contentId);
                return;
            }
            
            vodDemo.removeModal();
        },

        deleteContent : function(elem, event)
        {
            const contentId = elem.parent().attr('contentId');
            
            vodDemo.deleteVodContent(contentId);
            vodDemoHandler.UI.handleClickOnVodDemo();
        },

        postComment : function(elem, event)
        {
            const contentId = vodDemo.getDOM(vodDemoConstant.UIConstants.VIEWER).attr('contentId');
            const commentSec = vodDemo.getDOM(vodDemoConstant.UIConstants.COMMENT_SEC);
            const msgBox = commentSec.find('.rtcp-self-commenter-box-input-sec');
            const msg = msgBox[0].innerText.trim();
            
            const session = vodDemo.getVodDemoSession();
            const content = session.getVodContent(contentId);
            const vodStudio = content && content.vodStudio;
            
            if(msg.length === 0 || !vodStudio)
            {
                return;
            }

            const successCB = (id, commentObj) =>
            {
                const viewerCommentsList = commentSec.find('.rtcp-vod-viewers-comment-sec');

                if(viewerCommentsList.length === 0)
                {
                    return;
                }

                const commentHTML = $(VODTemplate.getViewerCommentBox(vodDemo.getVodDemoSession(), id, commentObj));

                if(viewerCommentsList.children().length)
                {
                    commentHTML.append('<div class="rtcp-viewer-comment-separator"></div>');
                }
                
                viewerCommentsList.prepend(commentHTML);
                vodDemoUtils.refreshViewerCommentReadMore(commentHTML);

                commentSec.find('.rtcp-vod-total-comments-count').text(vodStudio.getCommentsCount())

                const cont = msgBox.parent();
                
                cont.removeClass('active').off('mousedown');
                msgBox.blur().removeAttr('contenteditable');
            }

            const errorCB = (err) =>
            {
                vodDemo.pushNotification("Error while posting comment. Please try again.", true);
            }

            vodStudio.addComment({msg, dname : session.getCurrentUserName()}, successCB, errorCB); 
            
            msgBox.text('');
            elem.parent().find('.rtcp-self-comment-cancel-btn').trigger('click'); // to reset the comment box to previous state
        },

        updateComment : function(elem, event)
        {
            const contentId = vodDemo.getDOM(vodDemoConstant.UIConstants.VIEWER).attr('contentId');
            const commentBox = elem.closest('.rtcp-vod-viewers-comment-box');
            const msgBox = commentBox.find('.rtcp-viewer-commenter-box-input-sec');
            const commentId = commentBox.attr('id');
            const msg = msgBox[0].innerText.trim();

            const cancelBtn = elem.parent().find('.rtcp-self-comment-cancel-btn');
            const closeCB = () => cancelBtn.trigger('click');

            if(msg.length === 0)
            {
                closeCB(); // to reset the comment box to previous state as empty comment is not allowed
                return;
            }
            
            const session = vodDemo.getVodDemoSession();
            const content = session.getVodContent(contentId);
            const vodStudio = content && content.vodStudio;

            if(!vodStudio)
            {
                closeCB();
                return;
            }
            
            const comments = vodStudio.getComments();
            const commentInfo = comments[commentId];

            if(!commentInfo)
            {
                closeCB();
                return;
            }

            const previousComment = commentInfo.comment;
            
            if(msg === previousComment)
            {
                closeCB();
                return;
            }

            const successCB = () =>
            {
                closeCB();
                msgBox[0].innerText = VODProcessXss.processXSS(msg);
                vodDemoUtils.refreshViewerCommentReadMore(commentBox);
                commentBox.find('.rtcp-vod-viewers-commented-time').text('Just now');
            }

            const errorCB = (err) =>
            {
                vodDemo.pushNotification("Error updating comment. Please try again.", true);
                closeCB();
                msgBox[0].innerText = VODProcessXss.processXSS(previousComment);
            }

            vodStudio.editComment({id : commentId, comment : msg}, successCB, errorCB); 
        },

        postReplyComment : function(elem, event)
        {
            const commentCont = elem.closest('.rtcp-vod-reply-comment').removeClass('active');
            const commentActionHTML = $(VODTemplate.getCommentActions());
            
            elem.parents('.rtcp-vod-viewers-replies-list').append(commentCont);

            commentCont.find('.rtcp-vod-self-reply').append(commentActionHTML);
            commentCont.find('.rtcp-viewer-commenter-box-input-sec').removeAttr('contenteditable aria-label');
            commentCont.find('.rtcp-self-comment-actions').remove();
        },

        openSelfCommentActions : function(elem, event)
        {
            elem.addClass('active');
            const commentId = elem.closest('.rtcp-vod-viewers-comment-box').attr('id');
            const root = vodDemo.getDOM('root');
            const popup = $(VODTemplate.getSelfCommentActionsPopup(commentId));

            root.append(popup);

            const offset = elem.offset();
            const top = offset.top;
            const left = offset.left + elem.outerWidth() + 15;

            popup.css({
                top : top + 'px',
                left : left + 'px',
                right : 'auto'
            });

            vodDemoUtils.clickOutside.bind(
            {
                elem : popup,
                doNotClose : (event) =>
                {
                    return $(event.target).closest(popup).length;
                },
                onClose : () =>
                {
                    elem.removeClass('active');
                    popup.remove();
                }
            });
        },

        editComment : function(elem, event)
        {
            const commentId = elem.closest('.rtcp-vod-more-opt-cont').attr('comment_id');
            const commentBox = vodDemo.getDOM('comment_sec').find(`#${commentId}`);

            const session = vodDemo.getVodDemoSession();
            const content = session.getVodContent(vodDemo.getDOM(vodDemoConstant.UIConstants.VIEWER).attr('contentId'));
            const vodStudio = content && content.vodStudio;

            if(!vodStudio)
            {
                return;
            }
            
            const commentUser = vodStudio.getComments()[commentId].userid.split('_')[2];

            if(!vodDemo.getVodDemoSession().isCurrentUser(commentUser))
            {
                return;
            }

            const editable = commentBox.find('.rtcp-viewer-commenter-box-input-sec');            
            
            vodDemoHandler.UI.handleClickOnVodDemo();

            if(commentBox.hasClass('active'))
            {
                editable.focus();
                return;
            }

            //const editable = commentBox.find('.rtcp-viewer-commenter-box-input-sec');
            const previousComment = editable.text();

            editable.attr({'contenteditable' : 'true', 'aria-label' : ''}).focus();
            commentBox.addClass('active');
            vodDemoUtils.resetCursorPosition(editable.get(0), undefined, true);

            vodDemoUtils.bindTextListeners(
            {
                elem : editable, 
                limit : vodDemo.getDefaultConfig('studioConfig', 'length', 'comment'),
                limitExceedError : { errContClass : "rtcp-vod-viewers-comment" },
                onTextChange : (value, length, limit) => 
                {
                    commentBox.find('.rtcp-self-comment-actions').toggleClass('selfcomment-inactive', (!(length > 0) || (value === previousComment)));
                }
            });

            const actions = $(VODTemplate.getAddCommentActions(['Save', 'updateComment']));
            commentBox.find('.rtcp-vod-viewers-comment').after(actions);

            const blurHandler = vodDemo.getBlurHandler();

            const moreOption = commentBox.find('.rtcp-vod-viewers-comment-actions').addClass('dN'); // to keep the more option button in active state while editing comment

            const onBlurListener = function()
            {
                if(commentBox.hasClass('active') && document.activeElement === editable.get(0))
                {
                    blurHandler.setLastActiveElem(editable);
                    blurHandler.setEventState(true);
                    return true;
                }
            };

            const closeEdit = () =>
            {
                blurHandler.unbindListener(onBlurListener); // remove the exact listener reference from the array
                commentBox.removeClass('active');
                editable.find('br').remove();
                editable.removeAttr('contenteditable aria-label');
                editable.blur();
                actions.remove();
                moreOption.removeClass('dN'); // to remove the active state from more option button when comment edit is closed
            };

            actions.find('.rtcp-self-comment-cancel-btn').on('click', function()
            {
                closeEdit();
                editable.text(previousComment);
            });

            blurHandler.bindListener(onBlurListener);
            editable.trigger('input');
        },

        deleteComment : function(elem, event)
        {
            const commentId = elem.closest('.rtcp-vod-more-opt-cont').attr('comment_id');

            vodDemoHandler.UI.handleClickOnVodDemo();

            const root = vodDemo.getDOM('root');
            const popup = $(VODTemplate.getDeleteConfirmPopup(commentId));

            popup.find('.rtcp-vod-confirm-popup-confirm').attr('comment_id', commentId);
            root.append(popup);
        },

        confirmDeleteComment : function(elem, event)
        {
            const contentId = vodDemo.getDOM(vodDemoConstant.UIConstants.VIEWER).attr('contentId');
            const commentId = elem.attr('comment_id');
            const commentBox = vodDemo.getDOM('comment_sec').find(`#${commentId}`);

            const session = vodDemo.getVodDemoSession();
            const content = session.getVodContent(contentId);
            const vodStudio = content && content.vodStudio;

            vodDemoHandler.UI.closeConfirmPopup();

            if(!vodStudio)
            {
                return;
            }

            const commentUser = vodStudio.getComments()[commentId].userid.split('_')[2];

            if(!session.isCurrentUser(commentUser))
            {
                return;
            }

            const successCB = () =>
            {
                commentBox.remove();
                vodDemo.getDOM('comment_sec').find('.rtcp-vod-total-comments-count').text(vodStudio.getCommentsCount());
            }

            const errorCB = (err) =>
            {
                vodDemo.pushNotification("Error while deleting comment. Please try again.", true);
            }

            vodStudio.deleteComment({id : commentId}, successCB, errorCB); 
        },

        closeConfirmPopup : function(elem, event)
        {
            const root = vodDemo.getDOM('root');
            root.find('.rtcp-vod-confirm-popup-overlay, .rtcp-vod-confirm-popup').remove();
        }
    },

    WMS :
    {
        handleVODStatus : function(msgObj)
        {
            const session = vodDemo.getVodDemoSession();
            const info = session.getVodContent(msgObj.uploadId); // always return object
            const category = vodDemoConstant.getCategoryGroup(vodDemoConstant.categoryConstants[msgObj.status]);
            const sorter = vodDemo.getUserVodCategoryIdSorter();
            
            if(!info || Object.keys(info).length === 0 || !category || !(sorter instanceof VodSorter) || info.status === vodDemoConstant.status.COMPLETED)
            {
                return;
            }

            const status = vodDemoConstant.categoryConstants[msgObj.status];
            const videoPropId = msgObj.uploadId;
            vodDemo.updateVODContent(videoPropId, {videoPropId, contentId : msgObj.contentId, status}, sorter);
        }
    }
};

var vodDemoApi =
{
    getPlaybackDetails : function(contentId, successCB, errorCB)
    {

        $.ajax({
            url : "/_wmsrtc/demo/playhub/"+contentId+"/play",
            type : 'GET',
            success : vodDemoUtils.ensureFn(successCB),
            error : vodDemoUtils.ensureFn(errorCB)
        });
    },

    getInfo : function(contentId, successCB, errorCB)
    {
        const url = contentId ? `/${contentId}/view` : '';
        
        $.ajax({
            url : "/_wmsrtc/demo/playhub"+url,
            type : 'GET',
            success : vodDemoUtils.ensureFn(successCB),
            error : vodDemoUtils.ensureFn(errorCB),
        });
    },

    fetchVODHome : function(session, isPublic, successCallBack)
    {
        const vodContentsIdMap = session[isPublic ? 'contentByIdMap' : 'userContentByIdMap'];
        const vodCategoryIDMap = {};

        const errorCB = (err) =>
        {
            vodDemo.pushNotification("Uh-oh! Something went wrong. Please check your internet connection and try again.", true);
        }

        const successCB = (resp) =>
        {
            const data = resp.data;

            if(!data)
            {
                errorCB();
                return;
            }

            for(const videoInfo of data)
            {   
                const status = vodDemoConstant.categoryConstants[videoInfo.status];
                const category = vodDemoConstant.getCategoryGroup(status);

                if(!category || 
                    (isPublic &&  (category !== vodDemoConstant.status.COMPLETED)))
                {
                    continue;
                }

                const vodCategory = vodCategoryIDMap[category] = vodCategoryIDMap[category] || [];
                const contentId = videoInfo.videoPropId;

                if(contentId in vodContentsIdMap)
                {
                    vodCategory.push(contentId);
                    continue;
                }
                
                videoInfo.status = status;
                videoInfo.duration = vodDemo.parseOrFormatTime(videoInfo.duration / 1000, true);

                Object.assign(videoInfo, vodDemo.getDateTime(videoInfo.uploadTime));
                vodContentsIdMap[contentId] = videoInfo;
                
                vodCategory.push(contentId);
            }

            const defaultSortConf = vodDemo.getDefaultConfig('sorterConfig').getDefault();
            const categoryIdMapKeys = Object.keys(vodCategoryIDMap);
            
            const sortBy = categoryIdMapKeys.reduce((obj, key) =>
            {
                obj[key] = defaultSortConf;
                return obj;
            },{});

            const sorterInstanceObj = { data : vodContentsIdMap, sortBy};
            const sorter = new VodSorter({ list : vodCategoryIDMap, ...sorterInstanceObj});

            vodDemo[isPublic ? '_vodCategoryIdSorter' : '_userVodCategoryIdSorter'] = sorter;

            vodDemoUtils.ensureFn(successCallBack)(sorter);
            vodDemo.setUploadAllowed(resp.isUploadAllowed);
        };

        return $.ajax({
            url : "/_wmsrtc/demo/playhub/contents?scope="+(isPublic ? 1 : 0),
            type : 'GET',
            success : successCB,
            error : errorCB,
        });
    },

    fetchVODViewer : function(session, propId)
    {
        const errorCB = (err) =>
        {
            vodDemo.pushNotification("Uh-oh! Something went wrong. Please check your internet connection and try again.", true);
        }

        const successCB = (resp) =>
        {
            const content = resp.data;

            if(typeof content !== 'object')
            {
                errorCB();
                return;
            }

            const isPublic = content.visibility;
            const vodContentsIdMap = session[isPublic ? 'contentByIdMap' : 'userContentByIdMap'];
            const status = vodDemoConstant.categoryConstants[content.status];
            const category = vodDemoConstant.getCategoryGroup(status);

            Object.assign(content, vodDemo.getDateTime(content.uploadTime));

            if(!category || 
                (isPublic &&  (category !== vodDemoConstant.status.COMPLETED)))
            {
                vodDemo.pushNotification("Uh-oh! Something went wrong. Please try again.", true);;
                return;
            }

            content.status = status;
            content.duration = vodDemo.parseOrFormatTime(content.duration / 1000, true);
            content.vodStudio = new ZRVODViewer(content.vodkey, {pbToken : content.pbtoken, wssUrl : content.wssurl, userId: content.viewerid, contentId : content.contentId} )
            const emitter = content.vodStudio.getEmitter();
            
            const handleSessionReady = () =>
            {
                vodDemo.setActiveTab(isPublic ? vodDemoConstant.UIConstants.HOME : vodDemoConstant.UIConstants.MY_VIDEOS);
                vodDemo.openViewerPage(propId);
            };

            const handleInvalidSession = () =>
            {
                vodDemo.pushNotification("Uh-oh! Something went wrong. Please try again.", true);;
            };

            //emitter.on("handleSessionReady", handleSessionReady);
            //emitter.on("handleInvalidSession", handleInvalidSession); 

            vodContentsIdMap[propId] = content;
            vodDemo.pushHistoryState({ // To Handle popstate, Need to maintain video state
                propId : propId, 
                isPublic : Boolean(isPublic)
            }, 'Playhub', `/${propId}/view`);
            handleSessionReady();
        };

        return $.ajax({
            url : "/_wmsrtc/demo/playhub/"+propId+"/play",
            type : 'GET',
            success : successCB,
            error : errorCB,
        });
    },

    getUploadId : function(successCB, errorCB)
    {
        $RTCAjx.ajax({
            url : "/_wmsrtc/demo/playhub/upload",
            type : "GET",
            success : vodDemoUtils.ensureFn(successCB),
            error : vodDemoUtils.ensureFn(errorCB),
        });
    },

    updateMetaInfo : function(contentId, data, successCB, errorCB)
    {
        $.ajax({
            url : `/_wmsrtc/demo/playhub/${contentId}/update`,
            contentType: 'application/json',
            type : "PUT",
            data : JSON.stringify(data),
            success : vodDemoUtils.ensureFn(successCB),
            error : vodDemoUtils.ensureFn(errorCB),
        });
    },

    deleteContent : function(contentId, successCB, errorCB)
    {
        var data = 
        {
            opr : 'deletecontent',
            contentid : contentId
        };

        $RTCAjx.ajax({
            url : "/rtcpdemoaction.do",
            type : "GET",
            data : data,
            success : vodDemoUtils.ensureFn(successCB),
            error : vodDemoUtils.ensureFn(errorCB),
        });
    },

    cancelUpload : function(contentId, successCB, errorCB)
    {
        $.ajax({
            url : "/_wmsrtc/demo/playhub/"+contentId+"/cancel",
            type : "DELETE",
            success : vodDemoUtils.ensureFn(successCB),
            error : vodDemoUtils.ensureFn(errorCB),
        });
    },
};

var vodDemoUtils =
{
    clickOutside : (function ()
    {
        var popUpElem = null;

        return {
            bind : function (configs)
            {
                this.close();

                this.doNotClose = vodDemoUtils.ensureFn(configs.doNotClose);
                this.onClose = vodDemoUtils.ensureFn(configs.onClose);
                this.hideClass = configs.hideClass || null;
                
                popUpElem = configs.elem;
            },

            close : function (event) 
            {
                if(popUpElem !== null)
                {
                    const doNotClose = this.doNotClose;
                    const onClose = this.onClose;

                    if(event && typeof doNotClose === 'function' && doNotClose(event))
                    {
                        return;
                    }
                    
                    if(popUpElem.length > 0)
                    {
                        if(this.hideClass !== null)
                        {
                            popUpElem.addClass(this.hideClass);
                        }
                        else
                        {
                            popUpElem.remove();
                        }
                        
                        popUpElem = null;

                        if(typeof onClose === 'function')
                        {
                            onClose();
                        }
                    }
                    
                    this.onClose = null;
                    this.doNotClose = null;
                }
            }
        }
    })(),

    ensureFn : function (fn)
    {
        return typeof fn === 'function' ? fn : function(){}
    },

    removeClass : function (elem, prefix)
    {
        if(elem.length === 0) 
        {
            return;
        }
        
        elem.removeClass(function(index, currentClass)
        {
            return currentClass.match(new RegExp('\\b' + prefix + '\\S+', 'g')) || [];
        });
    },

    resetCursorPosition : function (node, pos, isDIV)
    {
        if(isDIV)
        {
            const selection = window.getSelection();
            const range = document.createRange();
            
            range.selectNodeContents(node);
            selection.removeAllRanges();
            selection.addRange(range);
            range.collapse(false);
        }
        else
        {
            node.setSelectionRange(pos, pos);
        }
    },

    bindTextListeners : function (bindingConfig = {})
    {
        var { elem, limitExceedError } = bindingConfig;

        elem.off('.vodTextListeners');
        limitExceedError = (limitExceedError === true || typeof limitExceedError !== 'object') ? {} : limitExceedError;

        const {limit, events, onTextChange, onLimitExceed, isKeyAllowed} = bindingConfig;
        const isDIV = elem.is('div');
        const get = () => isDIV ? elem[0].innerText : elem.val();
        const set = (value) => isDIV ? (elem[0].innerText = value) : elem.val(value);
        const node = elem[0];

        const allowedEventCode = 
        [
            'Backspace', 'Delete', 'Tab', 'Shift', 'Pause',
            'Control', 'Alt', 'Meta',
            'End', 'Home', 'Page', 'Arrow',
            'Insert', 'ContextMenu', 'CapsLock', 'NumLock', 'ScrollLock'
        ];

        const limitEnforcer = (event) =>
        {
            let length = get().length + 1;

            if(event.code === 'Escape') 
            {
                elem.blur(); 
                event.preventDefault();
                return;
            }
            
            if(length > limit)
            {
                if(event.metaKey || event.ctrlKey || allowedEventCode.some((code) => event.code.startsWith(code)))
                {
                    return; // Allow these keys
                }

                const selection = window.getSelection();

                if(selection.toString().length > 0)
                {
                    if(isDIV) // for conteneteditable div
                    {
                        const range = selection.getRangeAt(0);
                            
                        if(node.contains(range.commonAncestorContainer) && checkAndExecute(isKeyAllowed,[event.key]))
                        {
                            return; // Allow the key
                        }
                    }
                    else
                    {
                        const selectLength = node.selectionEnd - node.selectionStart;

                        if(selectLength > 0 && checkAndExecute(isKeyAllowed,[event.key]))
                        {
                            return;
                        }
                    }
                }

                event.preventDefault();
                elem.trigger(vodDemoConstant.status.ERROR);
                checkAndExecute(onLimitExceed);
            }
        }

        const changeListener = (event) =>
        {
            let value = get();

            if(value.trim().length === 0)
            {
                value = '';
            }

            let length = value.length;

            if(length > limit) // for paste event
            {
                value = value.slice(0, limit);
                set(value);
                length = limit;

                elem.trigger(vodDemoConstant.status.ERROR);
                vodDemoUtils.resetCursorPosition(node, limit, isDIV); // Reset cursor position to the end -> assigning value will reset the cursor position
                checkAndExecute(onLimitExceed);
            }

            checkAndExecute(onTextChange, [value, length, limit]);
        }

        const checkAndExecute = (fn, arg = []) =>
        {
            if (typeof fn === 'function') 
            {
                return fn(...arg, elem);
            }

            return true; // if fn is not a function, return true
        }
        
        if(isDIV)
        {
            // Intercept paste to insert plain text only — contenteditable divs accept rich HTML by default,
            // which carries over background colors, fonts, and other formatting from the source.
            elem.on('paste.vodTextListeners', function(event)
            {
                event.preventDefault();
                var text = (event.originalEvent || event).clipboardData.getData('text/plain');

                // Prefer native insertion path for proper undo history.
                // Some browsers return false even when insertion succeeds, so do not branch on return value.
                var inserted = false;

                try
                {
                    if(typeof document.execCommand === 'function')
                    {
                        document.execCommand('insertText', false, text);
                        inserted = true;
                    }
                }
                catch(e)
                {
                    inserted = false;
                }

                if(!inserted)
                {
                    var selection = window.getSelection();

                    if(selection.rangeCount)
                    {
                        var range = selection.getRangeAt(0);
                        range.deleteContents();
                        var textNode = document.createTextNode(text);
                        range.insertNode(textNode);
                        range.setStartAfter(textNode);
                        range.setEndAfter(textNode);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                }

                elem.trigger('input'); // trigger input event manually so changeListener (limit enforcement) still fires
            });
        }

        if(!events || events.includes('keydown'))
        {
            elem.on('keydown.vodTextListeners', limitEnforcer);
        }

        if(!events || events.includes('input'))
        {
            elem.on('input.vodTextListeners', changeListener);
        }

        if(limitExceedError)
        {	
            let errElem;

            if(typeof limitExceedError.errContClass === 'string')
            {
                const closesElem = elem.closest('.' + limitExceedError.errContClass);
                
                if(closesElem.length)
                {
                    errElem = closesElem;
                }
            }
            else
            {
                errElem = elem;
            }

            let errTimeout = null;

            const showInputError = () =>
            {	
                if(errTimeout !== null)
                {
                    clearTimeout(errTimeout);
                }

                errElem.attr('input_error_status', true);

                errTimeout = setTimeout(() => {
                    errElem.removeAttr('input_error_status');
                    errTimeout = null;
                }, 200);
            };

            elem.on('error.vodTextListeners', showInputError);
        }
    },

    refreshViewerCommentReadMore : function(scope)
    {
        const root = scope && scope.length ? scope : $(document);
        const comments = root.find('.rtcp-vod-viewers-comment');

        comments.each(function()
        {
            const commentBox = $(this);
            const content = commentBox.find('.rtcp-viewer-commenter-box-input-sec').first();
            const readMoreBtn = commentBox.find('.rtcp-viewer-comment-readmore').first();

            if(content.length === 0 || readMoreBtn.length === 0)
            {
                return;
            }

            content.removeClass('rtcp-comment-expanded').addClass('rtcp-comment-collapsed');
            readMoreBtn.text('Read more');

            const node = content[0];
            const hasOverflow = node.scrollHeight > node.clientHeight + 1;

            if(hasOverflow)
            {
                readMoreBtn.removeClass('dN');
            }
            else
            {
                content.removeClass('rtcp-comment-collapsed');
                readMoreBtn.addClass('dN');
            }
        });
    }
};/**
 * 
 * @param {Object} data - VOD category vs ids mapping {completed : [id1, id2], processing: [id3, id4]}
 * @param {String} sortBy - Key to sort by (e.g., 'uploadtime', 'title', etc.)
 * @param {Object} sortBy - { completed : { sortKey : 'uploadtime', desc : true}, processing: {sortKey : 'title'}}
 * @param {Boolean} desc - Sort order, true for descending, false for ascending
 */

class VodSorter {
    constructor(data)
    {
        this.list = {};
        this.sortBy = {};
        this.data = data.data || {};
        this.activePage = {};
        this.pageInfo = {};
        this.pageConfig = 
        {
            '__all__' : 
            {
                size : 20,
                maxVisible : 4,
                pagesElemCount : 8
            } 
        };

        if(typeof data.pageConfig === 'object')
        {
            for(const category in data.pageConfig) // whatever given i will store
            {
                const config = data.pageConfig[category];
                this.setPageConfig(category, config); // setTotalPages will not be called here as no list is added yet
            }
        }

        this.addList(data.list, data.sortBy, data.desc, data.dataType); // setTotalPages and setPageInfo will be called here
    }

    ensureValidInt (input, defaultValue)
    {
        input = Math.trunc(Number(input));
        return (input > 0) ? input : defaultValue;
    }

    getValidCategories (categories)
    {
        if(typeof categories === 'undefined')
        {
            categories = Object.keys(this.list);
        }
        else
        {
            categories = Array.isArray(categories) ? categories : [categories];
            categories = categories.filter(cat => (cat in this.list));
        }

        return categories;
    }

    isValidCategory (category)
    {
        return (category in this.list);
    }

    // Not needed but keep it
    
    findPage(category, id)
    {
        const negativeIndex = -1;

        if(!this.isValidCategory(category))
        {
            return negativeIndex;
        }

        const ids = this.list[category];
        const index = ids.indexOf(id);

        if(index === negativeIndex)
        {
            return negativeIndex;
        }

        const pageSize = this.getPageConfig(category, 'size');

        return Math.floor(index / pageSize) + 1;
    }

    setTotalPages (category, newPageSize)
    {
        if(!this.isValidCategory(category))
        {
            return;
        }

        const size = this.ensureValidInt(newPageSize, (this.getPageConfig(category, 'size') || 20));        
        const info = this.activePage[category] = this.activePage[category] || {};
        const totalPages = Math.ceil(this.getCategoryLength(category) / size);

        if(info.totalPages !== totalPages)
        {
            info.totalPages = totalPages;
        }
    }

    setPageConfig (category, newConfig)
    {
        /**
         * Cases to consider:
         * 1. setPageConfig will be called before adding any list, so totalItems will be 0
         * 2. total items can be less than new page size
         */
        category = category || '__all__';
        
        const config = this.pageConfig[category] = this.pageConfig[category] || {};
        const maxVisiblePages = newConfig.maxVisiblePages;
        const pagesElemCount = newConfig.pagesElemCount;
        const size = newConfig.pageSize;

        if(typeof size !== 'undefined')
        {
            const oldVal = config.size;
            const newPageSize = size;

            if(oldVal === newPageSize)
            {
                return;
            }

            config.size = newPageSize;

            const categories = (category === '__all__') ? this.getValidCategories() : [category];
                
            for(const cat of categories)
            {
                this.setTotalPages(cat, newPageSize); // if size changes, page info also changes
            }

            this.setPageInfo(categories); // reset page info for all categories
        }

        const set = (key, newVal, defaultVal) => // when dynamically changing, if oldVal is valid int then use it, else use newVal if valid int else use defaultVal
        {   
            const oldVal = config[key];
            
            newVal = this.ensureValidInt(newVal, (oldVal || defaultVal));
        
            if(oldVal !== newVal)
            {
                config[key] = newVal;
            }
        }

        if(typeof maxVisiblePages !== 'undefined')
        {
            set('maxVisible', maxVisiblePages, 4);
        }

        if(typeof pagesElemCount !== 'undefined')
        {
            set('pagesElemCount', pagesElemCount, 8);
        }
    }

    getPageConfig (category, key)
    {
        const defaultConfig = this.pageConfig.__all__;
        const categoryConfig = this.pageConfig[category] || defaultConfig;

        if(typeof key === 'undefined')
        {
            return categoryConfig;
        }

        return (key in categoryConfig) ? categoryConfig[key] : defaultConfig[key];
    }

    setPageInfo (categories, pageNo)
    {
        categories = this.getValidCategories(categories);
        
        const updatedPageInfo = categories.reduce((obj, cat) =>
        {
            const currentPageNo = this.getCurrentPageNo(cat);
            const size = this.getPageConfig(cat, 'size');
            const totalPages = this.getTotalPages(cat);

            pageNo = this.ensureValidInt(pageNo, (currentPageNo || 1));

            if(pageNo > totalPages)
            {
                pageNo = totalPages;
            }

            if(currentPageNo !== pageNo)
            {
                const info = this.activePage[cat] = this.activePage[cat] || {};
                info.currentPage = pageNo;
            }

            const itemsInView = this.list[cat].slice((pageNo - 1) * size, pageNo * size);

            obj[cat] =
            {
                [pageNo] : itemsInView
            };

            return obj;
        }, {});

        Object.assign(this.pageInfo, updatedPageInfo);

        return updatedPageInfo;
    }

    getCategoryLength (category)
    {
        if(this.isValidCategory(category))
        {
            return this.list[category].length;
        }

       return 0;
    }

    getItemsInView (category)
    {
        let arr = [];

        if(this.isValidCategory(category))
        {
            arr = Object.values(this.pageInfo[category] || {})[0] || arr; 
        }

        return arr;
    }

    getItemsInPage (category, pageNo)
    {
        if(!this.isValidCategory(category))
        {
            return [];
        }

        const size = this.getPageConfig(category, 'size');
        const totalPages = this.getTotalPages(category);
        pageNo = this.ensureValidInt(pageNo, 1);

        if(pageNo > totalPages)
        {
            pageNo = totalPages;
        }

        const ids = this.list[category];
        return ids.slice((pageNo - 1) * size, pageNo * size);
    }

    isItemInView (id, category)
    {
        const itemsInView = this.getItemsInView(category);
        return itemsInView.includes(id);
    }

    getCurrentPageNo (category)
    {
        return (this.activePage[category] || {}).currentPage;
    }

    getTotalPages (category)
    {
        return (this.activePage[category] || {}).totalPages || 0;
    }

    getPages (category)
    {
        const totalItems = this.getCategoryLength(category);
        let pageSize = this.getPageConfig(category, 'size');

        if(!totalItems || totalItems <= pageSize)
        {
            return [];
        }

        const totalPages = this.getTotalPages(category);

        let totalElems = this.getPageConfig(category, 'pagesElemCount');
        let maxPageVisibile = this.getPageConfig(category, 'maxVisible');
        let currentPageNo = this.getCurrentPageNo(category);
        
        if(totalElems > totalPages)
        {
            totalElems = totalPages;
        }

        if(maxPageVisibile > totalElems)
        {
            maxPageVisibile = totalElems;
        }

        if(currentPageNo > totalPages)
        {
            currentPageNo = totalPages;
        }

        const sidesDiff = (totalElems - maxPageVisibile);
        let maxSideRight = 0;
        let maxSideLeft = 0;

        if(sidesDiff > 5 )
        {
            maxSideRight = maxSideLeft = 3;
        }
        else if(sidesDiff > 3)
        {
            maxSideRight = maxSideLeft = 2;
        }
        else if(sidesDiff > 1)
        {
            maxSideRight = 2;
        }

        if(sidesDiff <= 1)
        {
            maxPageVisibile = totalElems;
        }

        const leftOverCount = totalElems - (maxSideRight + maxSideLeft);

        if(leftOverCount !== maxPageVisibile)
        {
            maxPageVisibile = leftOverCount;
        }

        let startLeft = Math.max(1, currentPageNo - Math.floor((maxPageVisibile/2)));
        let endRight = (startLeft + (maxPageVisibile - 1));

        if(endRight > totalPages)
        {
            endRight = totalPages;
            startLeft = Math.max(1, endRight - (maxPageVisibile - 1));
        }

        const diffOfLast = (totalPages - endRight);
        let rightSide = [];

        if(diffOfLast > 0)
        {
            const maxSideLength = Math.min(diffOfLast, maxSideRight);
            
            maxSideRight = maxSideRight - maxSideLength;

            if(maxSideLength)
            {
                rightSide = Array.from({length : maxSideLength}, (_, i) => i + (totalPages - (maxSideLength - 1)));
            }
        }

        if(maxSideRight == 2 && maxSideLeft == 0)
        {
            maxSideLeft = 2;
            maxSideRight = 0;
        }
        
        const diffOfFirst = (startLeft - 1);
        let leftSide = [];

        if(diffOfFirst > 0)
        {
            const maxSideLength = Math.min(diffOfFirst, maxSideLeft);

            maxSideLeft = maxSideLeft - maxSideLength;

            if(maxSideLength)
            {
                leftSide = Array.from({length : maxSideLength}, (_, i) => i + 1);
            }
        }

        startLeft = startLeft - maxSideRight;
        endRight = endRight + maxSideLeft;

        const pages = [];
        const dot = '...';

        for(let i = startLeft; i <= endRight; i++)
        {
            pages.push(i);
        }
        
        if((rightSide[0] - endRight) > 1)
        {
            rightSide[0] = dot;
        }

        let leftSideLastIndex = (leftSide.length - 1);

        if((startLeft - leftSide[leftSideLastIndex]) > 1)
        {
            leftSide[leftSideLastIndex] = dot;
        }

        return [...leftSide, ...pages, ...rightSide];
    }

    getPageInfo (category)
    {
       return this.pageInfo[category] || {};
    }

    addList (list, sortBy, desc, dataType)
    {
        if(typeof list !== 'object')
        {
            return;
        }

        const isSortByObject = (typeof sortBy === 'object');
        const isSortByString = (typeof sortBy === 'string');

        if(typeof sortBy === 'number')
        {
            sortBy = String(sortBy);
        }

        if(!isSortByObject && (!isSortByString || typeof dataType === 'undefined')) // addlist must have dataType when sortBy is string
        {
            return;
        }

        for(const k in list)
        {
            const ids = list[k];
            
            if(!Array.isArray(ids) || !ids.length)
            {
                continue;
            }

            if(isSortByObject) 
            {
                const config = sortBy[k];

                if(typeof config !== 'object' || 
                    typeof config.sortKey === 'undefined' || 
                    (typeof config.dataType === 'undefined' && typeof config.dataType === 'undefined'))
                {
                    continue;
                }
            }

            this.list[k] = ids;
        }
 
        const {pageInfo} = this.sort(sortBy, desc, dataType);
        return pageInfo;
    }

    static get sorters ()
    {
        const dataTypeSorters =
        {
            number : (a, b, desc) => desc ? b - a : a - b,
            string : (a, b, desc) => desc ? b.localeCompare(a) : a.localeCompare(b)
        }

        const sorter = (dataType, a, b, desc) =>
        {
            var value; // + b goes forward, - a goes backward
                
            if (typeof a !== dataType) // regardless of desc, invalid dataType goes backward
            {
                value = 1; // if only a is invalid, b goes forward
            }
            
            if (typeof b !== dataType) // regardless of desc, invalid dataType goes backward
            {
                value = value ? 0 : -1; // if only b is invalid, a goes forward, if both invalid, no change in order
            }

            if(typeof value === 'undefined')
            {
                value = dataTypeSorters[dataType](a, b, desc);
            }

            return value;
        }

        return {
            number : (a, b, desc) => sorter('number', a, b, desc),
            string : (a, b, desc) => sorter('string', a, b, desc)
        };
    }

    sort (sortBy, desc = false, dataType, category, overRide)
    {
        const sortByType = (typeof sortBy);
        const isSortByObject = (sortByType === 'object');
        const isSortByString = (sortByType === 'string');
        
        if(sortByType === 'number')
        {
            sortBy = String(sortBy);
        }

        if(!isSortByObject && !isSortByString) // dataType is not mandatory here
        {
            return;
        }

        const list = this.list;
        const data = this.data;
        const empty = {};
        
        if(isSortByString)
        {
            if(typeof category === 'string')
            {
                if(!(category in list))
                {
                    return empty;
                }

                sortBy = 
                {
                    [category] : { sortKey : sortBy, desc, dataType} 
                };
            }
            else
            {
                sortBy = this.getValidCategories().reduce((obj, k) => 
                {
                    obj[k] = { sortKey : sortBy, desc, dataType };
                    return obj;
                }, {});
            }
        }

        const sortedKeys = [];

        for(const key in sortBy)
        {
            const newConfig = sortBy[key];
            const ids = list[key];

            if(typeof newConfig !== 'object' || !Array.isArray(ids) || !ids.length)
            {
                continue;
            }

            let oldConfig = this.sortBy[key]; 
            let isFirstSort;
            
            if(typeof oldConfig === 'undefined')
            {
                isFirstSort = true;
                oldConfig = {};
            }
            
            let sortDataType = newConfig.dataType;

            if(typeof sortDataType === 'undefined')
            {
                sortDataType = newConfig.dataType = oldConfig.dataType;
            }
            
            const sortingMethod = VodSorter.sorters[sortDataType] || sortBy.sortFn;
            const sortKey = newConfig.sortKey;
            let isDesc = newConfig.desc;

            if(typeof isDesc !== 'boolean')
            {
                isDesc = newConfig.desc = false;
            }

            if(typeof sortKey === 'undefined' || !sortingMethod)
            {
                continue;
            }

            const oldConfigKeys = Object.keys(oldConfig);

            if(oldConfigKeys.length && !(oldConfigKeys.some(conf => oldConfig[conf] !== newConfig[conf])) && !overRide)
            {
                continue;
            }

            const newList = ids.sort((a, b) => 
            {
                const aData = data[a] || {};
                const bData = data[b] || {};

                return sortingMethod(aData[sortKey], bData[sortKey], isDesc);
            });

            const sortedIds = [...new Set(newList)];
            this.sortBy[key] = newConfig;
            list[key] = sortedIds;
            
            if(isFirstSort)
            {
                this.setTotalPages(key); // its for specific key/category
            }

            sortedKeys.push(key);
        }

        const pageInfo = this.setPageInfo(sortedKeys); // reset page info for sorted categories
        return { pageInfo, keys : sortedKeys};
    }

    add(id, category)
    {
        const sortedConfig = this.sortBy[category];
        const ids = this.list[category];
        
        if(typeof id === 'undefined' || typeof category === 'undefined' || 
            typeof ids === 'undefined' || typeof sortedConfig === 'undefined')
        {
            return;
        }

        if(ids.includes(id))
        {
            this.delete(id, category, true);
        }
        
        const dataType = sortedConfig.dataType;
        const sortingMethod = VodSorter.sorters[dataType];
        const isAsc = !(sortedConfig.desc);
        const sortKey = sortedConfig.sortKey;
        
        const data = this.data;
        const sortVal =  data[id][sortKey];
        const idsLength = ids.length;

        const set = () =>
        {
            this.setTotalPages(category);
            this.setPageInfo(category);
        }

        if(dataType !== typeof sortVal || !idsLength || !sortingMethod)
        {
            ids.push(id);
            set();
            return;
        }
        
        const compareCB = isAsc ? (mid, ref) => mid < ref : (mid, ref) => mid > ref;
        var ranges = [];

        if(dataType === 'string')
        {
            const compareChar = sortVal.charAt(0).toLowerCase();
            const getCompareval = (index) => data[ids[index]][sortKey].charAt(0).toLowerCase();  
            
            ranges = getRange(compareChar, getCompareval);
        }
        else if(dataType === 'number')
        {
            ranges = getRange(sortVal, (index) => data[ids[index]][sortKey]);
        }

        var sortIndxIds = [];

        if(ranges.length === 1)
        {
            const index = ranges[0];
            
            sortIndxIds = [id, ids[index]]; 
            sortIndxIds.sort((a, b) => sortingMethod(data[a][sortKey], data[b][sortKey], !isAsc));
            ids.splice(index, 1, ...sortIndxIds);
        }
        else if(ranges.length === 2)
        {
            sortIndxIds = ids.slice(ranges[0], ranges[1] + 1);
            sortIndxIds.unshift(id);
            sortIndxIds.sort((a, b) => sortingMethod(data[a][sortKey], data[b][sortKey], !isAsc));

            const newIndex = sortIndxIds.indexOf(id);
            const lastIndex = (sortIndxIds.length - 1);
            let newSortIndxIds, otherId;
            
            if(newIndex == lastIndex)
            {
                otherId = sortIndxIds[newIndex - 1];
                newSortIndxIds = [otherId, id];
            }
            else
            {
                otherId = sortIndxIds[newIndex + 1];
                newSortIndxIds = [id, otherId];
            }

            ids.splice(ids.indexOf(otherId), 1, ...newSortIndxIds);
        }

        set();
        return this.isItemInView(id, category);

        function getRange (refVal, getCompareval)
        {
            const idsLength = ids.length;

            if(!idsLength)
            {
                return [idsLength];
            }

            const start = binarySearch(0, idsLength, false, getCompareval);

            if(start == idsLength)
            {
                return [start - 1]
            }
            else if(getCompareval(start) !== refVal)
            {
                return [start];
            }

            const end = binarySearch(start, idsLength, true, getCompareval) - 1;
            return (start == end) ? [start] : [start, end];

            function binarySearch (left, right, isRightwards, getCompareval)
            {
                while(left < right)
                {
                    const mid = (left + right) >> 1;
                    const midVal = getCompareval(mid);

                    if(compareCB(midVal, refVal) || (isRightwards && (midVal == refVal)))
                    {
                        left = mid + 1;
                    }
                    else
                    {
                        right = mid;
                    }
                }

                return left;
            }
        };
    }

    get()
    {
        return this.list;
    }

    delete (id, category, isReindexing)
    {
        if(typeof id === 'undefined')
        {
            return;
        }

        const deleteItem = (category) =>
        {
            const ids = this.list[category];
            const idIndex = ids.indexOf(id);

            if(idIndex == -1)
            {
                return;
            }

            ids.splice(idIndex, 1);
            
            if(!isReindexing)
            {
                this.setTotalPages(category);
                this.setPageInfo(category);
            }
        }

        if(typeof category === 'undefined')
        {
            this.getValidCategories().map(cat => deleteItem(cat));
        }
        else if(this.isValidCategory(category))
        {
            deleteItem(category);
        }
    }

    update(id, oldCategory, newCategory)
    {
        if(!this.isValidCategory(newCategory) || !this.isValidCategory(oldCategory))
        {
            return;
        }

        /**
         * if !this.isValidCategory(newCategory) is true then user should delete and addList
         */

        if(newCategory !== oldCategory) // newCategory === oldCategory is for reindexing case and this.add will handle that
        {
            this.delete(id, oldCategory);
        }
        
        return this.add(id, newCategory);
    }
}//$Id$

var vodDemo = {};
class VODDemoSession {
    constructor(data) {
        this.userId = data.zuid;
        this.userName = data.userName;
        this.userImage = data.userImage;
        this.uploadUrl = data.uploadUrl;
        this.contactsDomain = data.contactsUrl;
        this.contentByIdMap = {};
        this.userContentByIdMap = {};
    }
 
    getCurrentUserId()
    {
        return this.userId;
    }

    getCurrentUserName() 
    {
        return this.userName;
    }

    getUserImage(id)
    {
        if(!id)
        {
            id = this.getCurrentUserId();
        }

        return `${this.getContactsDomain()}/file?ID=${id}&t=user&exp=6000&fs=thumb&nocache=1752226615685`;
    }

    getContactsDomain() 
    {
        return this.contactsDomain;
    }

    getUploadUrl()
    {
        return this.uploadUrl;
    }

    getContentByIdMap() 
    {
        return this.contentByIdMap;
    }

    getUserContentByIdMap ()
    {
        return this.userContentByIdMap;
    }

    getActiveContentByIdMap ()
    {
        return (vodDemo.getActiveTab() === vodDemoConstant.UIConstants.MY_VIDEOS) ? this.getUserContentByIdMap() : this.getContentByIdMap();
    }

    getVodContent(contentId)
    {
        const contentByIdMap = this.getContentByIdMap();
        const userContentByIdMap = this.getUserContentByIdMap();

        const isInMyVideos = (vodDemo.getActiveTab() === vodDemoConstant.UIConstants.MY_VIDEOS);
        const primaryMap = isInMyVideos ? userContentByIdMap : contentByIdMap;

        if(contentId in primaryMap)
        {
            return primaryMap[contentId];
        }

        const secondaryMap = isInMyVideos ? contentByIdMap : userContentByIdMap;
        
        if(contentId in secondaryMap)
        {
            return secondaryMap[contentId];
        }
        
        return {};
    }

    initContentStudio(id, successCB, errorCB)
    {
        const content = this.getVodContent(id);
        successCB = vodDemoUtils.ensureFn(successCB);
        errorCB = vodDemoUtils.ensureFn(errorCB);

        if(!content)
        {
            return errorCB();
        }

        const contentId = content.contentId;

        if(content.vodStudio instanceof ZRVODStudio)
        {
            return successCB(content.vodStudio);
        }

        const reqSuccessCB = (resp) =>
        {
            const data = resp.data || {};

            const config = 
            {
                contentId,
                pbToken : data.pbtoken, 
                userId : data.viewerid, 
                wssUrl : data.wssurl
            };
            
            const vodStudio = content.vodStudio  = new ZRVODStudio(data.vodkey, config);
            successCB(vodStudio);
            //const emitter = vodStudio.getEmitter();

            //emitter.once('handleSessionReady', (vodStudio) => successCB(vodStudio));
            //emitter.once('handleError', (error) => errorCB(error));
        }

        const reqErrorCB = (err) =>
        {
            vodDemo.pushNotification("Uh-oh! Something went wrong. Please check your internet connection and try again.", true);
        }
        
        vodDemoApi.getPlaybackDetails(content.videoPropId, reqSuccessCB, reqErrorCB);
    }

    isCurrentUser(userId)
    { 
        return this.getCurrentUserId() == userId;
    }
}

vodDemo = 
{
    _vodDemoConfig : 
    {
        vodPlayerConfig :
        {
            zindex : 10,
            AV : "video",
            time : "enable",
            volume : "enable",
            seekbar : "enable",
            tooltip : "enable",
            forwardSeek: "enable",
            clickThrough: "enable",
            keycontrols : "enable",
            pauseOrPlay : "enable",
            backwardSeek: "enable",
            playbackspeed : "enable",
            closeNeeded : "disable",
            bottomControls : "enable",
            leftHigherLimit : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.innerWidth ? window.innerWidth : 0,
            topHeigherLimit : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.innerHeight ? window.innerHeight : 0
        },
        studioConfig :
        {
            length :
            {
                title : 124,
                description : 255,
                chapters_title : 124,
                chapters_description : 255,
                comment : 255,
                max_description : 200
            }
        },
        statusConfig :
        {
            [vodDemoConstant.status.PREVIEW]: ['rtcp-demo-vod-icon-upload-preview', ''],
            [vodDemoConstant.status.UPLOADED]: ['rtcp-demo-vod-icon-processing-begin', 'Processing will begin shortly'],
            [vodDemoConstant.status.PROCESSING] : ['rtcp-demo-vod-icon-processing', 'Processing'],
            [vodDemoConstant.status.UPLOAD_FAILED] : ['rtcp-demo-vod-icon-alert-fill', 'Error while uploading video'],
            [vodDemoConstant.status.PROCESSING_FAILED] : ['rtcp-demo-vod-icon-alert-fill', 'Error while processing video']
        },
        sorterConfig : (() =>
        {
            const config =
            {
                uploadTime :
                {
                    asc_title : 'Oldest',
                    desc_title : 'Recent',
                    dataType : 'number'
                },
                title :
                {
                    asc_title : 'A-Z',
                    desc_title : 'Z-A',
                    dataType : 'string'
                }
            };

            const order = ['asc', 'desc'];
            const defaultSortingArg = ['uploadTime', 'desc'];

            return {
                has (key)
                {
                    return key in config;
                },

                get (key, sortOrder)
                {
                    if(!this.has(key) || (order.indexOf(sortOrder) === -1))
                    {
                        return;
                    }

                    const conf = config[key];

                    return {
                        sortKey : key,
                        dataType : conf.dataType,
                        desc : (sortOrder === 'desc'),
                        title : conf[sortOrder+'_title'],
                        sortFn : conf.sortFn
                    };
                },

                getConfig ()
                {
                    return config;
                },

                getAll (keys)
                {
                    const sortingOptions = [];
                    
                    keys.forEach((key) =>
                    {
                        if(!this.has(key))
                        {
                            return;
                        }

                        const conf = config[key];

                        const option = 
                        {
                            sortKey : key,
                            dataType : conf.dataType,
                            sortFn : conf.sortFn
                        };

                        order.forEach((o) =>
                        {
                            sortingOptions.push({
                                ...option,
                                desc : (o === 'desc'),
                                title : conf[o+'_title'],
                            });
                        });
                    });

                    return sortingOptions;
                },

                getDefault ()
                {
                    return this.get(...defaultSortingArg);
                },

                add (key, newConfig)
                {
                    if(!this.has(key))
                    {
                        config[key] = newConfig;
                    }
                },

                update (key, newConfig)
                {
                    if(this.has(key))
                    {
                        Object.assign(config[key], newConfig);
                    }
                }
            }
        })(),
        orderedCategories : [vodDemoConstant.status.COMPLETED, vodDemoConstant.status.PROCESSING, vodDemoConstant.status.UPLOADING],
        defaultSortingConfig : {sortKey : 'uploadTime', desc : true, dataType : 'number'},
        pageSizes : [10, 20, 30, 40, 50]
    },
    
    _vodDOMMap : {},
    _vodDemoSession : null,
    _vodCategoryIdSorter : {},
    _userVodCategoryIdSorter : {},
    _activeTab : vodDemoConstant.UIConstants.HOME,
    _page : undefined,
    _viewerState : {},
    _winOnBlurHandler : (function()
    {
        var _blurInfo = {};

        return {

            setEventState : function(state)
            {
                _blurInfo.isEventTriggered = state;
            },

            getEventState : function()
            {
                return _blurInfo.isEventTriggered;
            },

            setLastActiveElem : function(elem)
            {
                _blurInfo.elem = elem;
            },

            bindListener : function(listener)
            {
                const listeners = _blurInfo.listener = _blurInfo.listener || [];
                listeners.push(listener);
            },

            unbindListener : function(listener)
            {
                const listeners = _blurInfo.listener || [];
                const index = listeners.indexOf(listener);

                if(index !== -1)
                {
                    listeners.splice(index, 1);
                }
            },

            onBlur : function(event)
            {
                const listeners = _blurInfo.listener || [];

                if(listeners.length)
                {
                    listeners.some((listener) => listener(event));
                }
            },

            focusHandler : function()
            {
                if(this.getEventState())
                {
                    this.setEventState(false);
                    const lastEdited = _blurInfo.elem;

                    if(lastEdited)
                    {
                        _blurInfo.elem = null;
                        lastEdited.focus();
                        vodDemoUtils.resetCursorPosition(lastEdited.get(0), undefined, true);
                        return;
                    }
                }
            }
        }
    })(),

    init : function (id, session)
    {
        const mainDOM = $(".rtcp-vod-homepage");

        if(!mainDOM.length)
        {
            return;
        }

        vodDemo.addDOM(vodDemoConstant.UIConstants.ROOT, mainDOM);
        vodDemo.setTheme();
        mainDOM.html(VODTemplate.getPageLoader());
        mainDOM.attr({'rtcpvodactionbtn':"", 'purpose':'handleClickOnVodDemo'});

        window.addEventListener('popstate', this.handlePopState);

        const blurHandler = this.getBlurHandler();
        window.addEventListener('blur', blurHandler.onBlur.bind(blurHandler));
        
        this.bindUIHandlers();
        this.initializeWmsLite(session);
        
        if(id)
        {
            vodDemoApi.fetchVODViewer(session, id);
        }
        else
        {
            this.openHomePage();
        }
    },

    initializeWmsLite(session)
    {
        WmsLite.setWmsContext('_wms');
        WmsLite.setNoDomainChange();  
        WmsLite.register("RT", session.getCurrentUserId());

        WmsliteImpl.handleAuthFailure = (mType) =>
        {
            
        };

        WmsliteImpl.serverdown = (a, b) => 
        { 
            
        }

        WmsliteImpl.serverup = (a, b) =>
        {
            
        }

        WmsliteImpl.handleMessage = (type, msgObj) =>
        {
            if(type == 59 && msgObj.module === 'vod')
            {
                const opr = msgObj.opr;

                if(typeof vodDemoHandler.WMS[opr] === 'function')
                {
                    vodDemoHandler.WMS[opr](msgObj);
                }
            }
        };
    },

    toggleNoRecordsFound : function(sorter)
    {
        const show = (Object.keys(sorter.data) == 0);
        const mainCont = this.getDOM(vodDemoConstant.UIConstants.HOME).find('.rtcp-grid-video-container');
        let noRecordsElem = mainCont.find('.rtcp-vod-home-no-data-sec');

        mainCont.children().toggleClass('vod-hide', show);

        if(!show)
        {
            noRecordsElem.remove();
            return;
        }

        const isInHome = (this.getActiveTab() === vodDemoConstant.UIConstants.HOME);
        const msg = isInHome ? "No videos are available at this time. Please return later" : 'Looks like it’s empty here — start adding videos to get going!';

        if(noRecordsElem.length === 0)
        {
            noRecordsElem = $(VODTemplate.getVodHomePanelNoData(isInHome));
            mainCont.append(noRecordsElem);
        }

        noRecordsElem.find(".rtcp-vod-home-no-data-icon").html(msg)
        noRecordsElem.removeClass('vod-hide');
    },

    openHomePageSortingOpt : function (elem)
    {
        if(elem.hasClass('active'))
        {
            vodDemoHandler.UI.handleClickOnVodDemo();
            elem.removeClass('active')
            return;
        }

        const category = elem.closest("[category]").attr('category');
        const sortByKeys = ['uploadTime', 'title'];
        const sorterConfig = vodDemo.getDefaultConfig('sorterConfig');

        if(category == vodDemoConstant.status.UPLOADING)
        {
            sortByKeys.push('status');
        }
        
        const sorter = this.getCurrentSorter();
        const currentConfig = sorter.sortBy[category];
        const configs = sorterConfig.getAll(sortByKeys);

        configs.activeTitle = sorterConfig.get(currentConfig.sortKey, (currentConfig.desc ? 'desc' : 'asc')).title;
        configs.category = category;

        const moreOptElem = $(VODTemplate.getSorterTemplate(configs));
        this.getDOM('root').append(moreOptElem);

        const left = elem.offset().left;
        const width = elem.outerWidth();
        const elemWidth = moreOptElem.outerWidth();
        const leftProp = left - ((elemWidth - width)/2) - 2;

        moreOptElem.css({left : leftProp+'px', top : (elem.offset().top + elem.outerHeight()) + 7 + 'px'});
        elem.addClass('active');

        vodDemoUtils.clickOutside.bind(
        {
            elem : moreOptElem, 
            doNotClose : (event) => 
            {
                return $(event.target).closest(moreOptElem).length;
            },
            onClose : () => 
            {
                elem.removeClass('active');
            }
        });
    },

    reArrangeContentsInCategory : function(category, config)
    {
        const sorter = this.getCurrentSorter();

        const {keys} = sorter.sort({[category] : config});

        if(keys.includes(category))
        {
            this.arrangeContentsInCategory(this.getVodDemoSession(), category);
        }
    },

    getDefaultConfig : function(key_1, key_2, key_3)
    {
        const config = this._vodDemoConfig[key_1];

        if(typeof key_2 !== 'undefined' && typeof config === 'object')
        {
            const nestedConfig = config[key_2];
            
            if(typeof key_3 !== 'undefined' && typeof nestedConfig === 'object')
            {
                return nestedConfig[key_3] || {};
            }
            return nestedConfig || {};
        }
        return config || {};
    },

    getCDNDomain : function()
    {
        return `https://${this._cdnDomain}/rtcplatform` || '';
    },

    setDefaultConfig : function(key, value)
    {
        this._vodDemoConfig[key] = value;
    },

    getCurrentSorter : function()
    {
        return (this.getActiveTab() === vodDemoConstant.UIConstants.MY_VIDEOS) ? this.getUserVodCategoryIdSorter() : this.getVodCategoryIdSorter();
    },

    switchPage : function(category, pageNo)
    {
        let sorter = this.getCurrentSorter();

        if(!sorter.isValidCategory(category))
        {
            return;
        }

        const totalPages = sorter.getTotalPages(category);

        pageNo = Math.min(Math.max(pageNo, 1), totalPages);

        sorter.setPageInfo(category, pageNo);
        this.arrangeContentsInCategory(this.getVodDemoSession(), category);
    },

    setViewerState : function(key, value)
    {
        this._viewerState[key] = value;
    },

    setUploadAllowed : function(value)
    {
        this._isUploadAllowed = value;
    },

    isUploadAllowed : function()
    {
        return this._isUploadAllowed;
    },

    getViewerState : function(key)
    {
        if(typeof key !== 'undefined')
        {
            return this._viewerState[key];
        }
        
        return this._viewerState;
    },

    getPlayerSpinner : function()
    {
        return $(RTCMediaPlayerTemplates.getMediaPlayerSpinner()).css('display', 'block');
    },

    getBlurHandler : function()
    {
        return this._winOnBlurHandler;
    },

    changePageSize : function(category, pageSize)
    {
        const sorter = this.getCurrentSorter();

        sorter.setPageConfig(category, pageSize);
        this.arrangeContentsInCategory(this.getVodDemoSession(), category);
    },

    setCategoryPanelHeight : function(category)
    {
        const home = this.getDOM(vodDemoConstant.UIConstants.HOME);
        const categoryPanel = home.find('[category="'+category+'"]');
        const sorter = this.getCurrentSorter();

        if(!sorter.isValidCategory(category) || !categoryPanel.length)
        {
            return;
        }

        const setHeight = () =>
        {
            const totalItems = sorter.getCategoryLength(category);
            const configSize = sorter.getPageConfig(category, 'size');
            const size = Math.min(configSize, totalItems);

            const videosListCont = categoryPanel.find('.rtcp-grid-video-list');
            const gridVideoBoxes = categoryPanel.find('.rtcp-grid-video-box');
            const gap = parseInt(categoryPanel.find('.rtcp-grid-video-list').css('gap'));
            const totalItemsInRow = Math.floor((videosListCont.outerWidth() + gap) / (gridVideoBoxes.outerWidth() + gap));
            const totalRow = Math.ceil(size / totalItemsInRow);
            const height = (totalRow * gridVideoBoxes.outerHeight()) + ((totalRow - 1) * gap) + 10;
            const padding = parseInt(videosListCont.css('padding-top')) + parseInt(videosListCont.css('padding-bottom'));
            
            videosListCont.css('height', height+padding+'px');
        };

        if(categoryPanel.find(".rtcp-grid-video-items-body").is(':visible'))
        {
            setHeight();
        }
        else
        {
            const purpose = "slideCategoryPanel";
            vodDemoHandler.UI.slideCategoryPanel(categoryPanel.find(`[purpose=${purpose}]`), null, setHeight);
        }
    },

    arrangeContentsInCategory : function(session, category, completionCallback, updateInfo = {}) // this will handle already existed panel or no panel at all ( when page loads)
    {
        requestAnimationFrame(() => {
            const homePanel = this.getDOM(vodDemoConstant.UIConstants.HOME);
            const isReset = (typeof category === 'undefined');
            const viewerDOM = vodDemo.getDOM(vodDemoConstant.UIConstants.VIEWER);
            const isInViewerPage = (viewerDOM.length > 0);
            const sorter = this.getCurrentSorter();

            this.toggleNoRecordsFound(sorter);

            const vodContentItems = sorter.data;
            const categoryOrder = isReset ? this.getOrderedCategories() : sorter.getValidCategories(category);
            const allGridBoxFragment = $(document.createDocumentFragment());
            const gridVideoBoxesIdMap = new Map();

            const findAllVideoBoxes = (allGridBoxes) =>
            {
                allGridBoxes.each(function (_, elem)
                {
                    elem = $(this);
                    gridVideoBoxesIdMap.set(+elem.attr('id'), elem);
                    allGridBoxFragment.append(elem);
                });
            }

            if(isInViewerPage)
            {
               findAllVideoBoxes(viewerDOM.find('.rtcp-grid-video-box'));
            }

            const addGridVideoBox = (arr, id, index, elem, data) =>
            {   
                if(isInViewerPage)
                {
                    elem.removeAttr('purpose sec rtcpvodactionbtn').removeClass('playing');
                    elem.find('.rtcp-vod-video-box-wave-icon').remove();
                    
                    if(data)
                    {
                        this.updateGridVideoContainerOpts(elem, session, data[id]);
                    }
                }

                arr[index] = elem.removeClass('dN');
                delete gridVideoBoxesIdMap.delete(id);
            }

            if(typeof updateInfo.oldCategory !== 'undefined')
            {
                const oldCategory = updateInfo.oldCategory;
                const gridVideoBox = homePanel.find('#rtcp-vod-'+oldCategory+' #'+updateInfo.contentId);

                if(gridVideoBox.length)
                {
                    homePanel.find('#rtcp-vod-'+updateInfo.currentCategory).append(gridVideoBox);
                    this.updateGridVideoContainerOpts(gridVideoBox, session, session.getVodContent(updateInfo.contentId));
                }
            };

            for(const currentCategory of categoryOrder)
            {
                const ids = sorter.getItemsInView(currentCategory).slice(0);
                const totalItems = sorter.getCategoryLength(currentCategory);
                const placeHolder = document.createComment('placeholder');
                const data = sorter.data;
                
                let categoryPanel = homePanel.find('#rtcp-vod-'+currentCategory);
                categoryPanel.toggleClass('dN', (totalItems === 0));
                
                if(!totalItems || (ids && !ids.length))
                {
                    findAllVideoBoxes(categoryPanel.find('.rtcp-grid-video-box'));
                    continue;
                }

                if(!categoryPanel.length)
                {
                    homePanel.find('.rtcp-grid-video-container').append(placeHolder);
                    categoryPanel = $(VODTemplate.getVideoCategoryPanel(currentCategory, vodDemoConstant.getCategoryTitle(currentCategory), totalItems));
                }
                else
                {
                    categoryPanel.replaceWith(placeHolder);
                    findAllVideoBoxes(categoryPanel.find('.rtcp-grid-video-box'));
                    categoryPanel.find('.rtcp-grid-video-items-title-count-value').text(totalItems);
                }

                const indexedGridVideoBoxes = Array(ids.length);

                ids.forEach((id, index) =>
                {
                    if(typeof id === 'undefined')
                    {
                        return;
                    }
                    
                    let gridVideoCont = gridVideoBoxesIdMap.get(id);

                    if(gridVideoCont)
                    {
                        addGridVideoBox(indexedGridVideoBoxes, id, index, gridVideoCont, data);
                        return;
                    }
                    
                    for(let [contId, elem] of gridVideoBoxesIdMap)
                    {
                        contId = Number(contId);

                        let elemIndex = ids.indexOf(Number(contId));
                        let exit = false;

                        if(elemIndex === -1)
                        {
                            const content = vodContentItems[contId] || session.getVodContent(contId); // Other user public content which is not in current sorter data but in session content map

                            if(typeof content === 'undefined' || Object.keys(content).length === 0)
                            {
                                continue;
                            }

                            vodDemo.updateGridVideoContainer(elem, id, content, vodContentItems[id]);
                            gridVideoCont = elem;
                            elemIndex = index;
                            exit = true;
                        }
                        else
                        {
                            ids[elemIndex] = undefined;
                        }

                        addGridVideoBox(indexedGridVideoBoxes, contId, elemIndex, elem, (!exit && data)); // To avoid second updateGridVideoContainerOpts call for the same content 

                        if(exit)
                        {
                            break;
                        }
                    }

                    if(!gridVideoCont || !gridVideoCont.length)
                    {
                        const info = vodContentItems[id];
                        
                        gridVideoCont = $(VODTemplate.getVideoGridContainer(session, id, info));
                        vodDemo.changeGridVideoStatus(gridVideoCont, info.status);
                        addGridVideoBox(indexedGridVideoBoxes, id, index, gridVideoCont);
                    }
                });
                
                categoryPanel.find('.rtcp-grid-video-list').append(...indexedGridVideoBoxes);
                this.arrangePagesInCategoryPanel(currentCategory, categoryPanel, sorter);
                placeHolder.replaceWith(categoryPanel[0]);
            };

            vodDemoUtils.ensureFn(completionCallback)();

            for(const cat of categoryOrder)
            {
                vodDemo.setCategoryPanelHeight(cat);
            }
        });
    },

    arrangePagesInCategoryPanel : function(category, categoryPanel, sorter)
    {
        const pagesArr = sorter.getPages(category);
        const pagesLength = pagesArr.length;
        let pagesParentCont = categoryPanel.find('.rtcp-grid-video-items-body .rtcp-vod-pagination');

        if(!pagesLength)
        {
            pagesParentCont.remove();
            return;
        }

        const currentPage = sorter.getCurrentPageNo(category);
        const parentHasLength = (pagesParentCont.length > 0);

        if(!parentHasLength)
        {
            pagesParentCont = $(VODTemplate.getPaginationTemplate());
            categoryPanel.find('.rtcp-grid-video-items-body').append(pagesParentCont);
        }

        const fragment = document.createDocumentFragment(); 
        const pagesCont = pagesParentCont.find(".rtcp-vod-pages");
        const pageElemMap = {};
        
        pagesCont.children().get().forEach((elem) =>
        {
            elem = $(elem);
            const pageNum = elem.text();
            pageElemMap[pageNum] = elem;
        });
        
        pagesArr.forEach((pageNum) =>
        {
            let elem = pageElemMap[pageNum];

            if(!elem)
            {
                elem = $('<div class="center"></div>');
                const isDot = (pageNum === '...');

                if(!isDot)
                {
                    elem.attr('rtcpvodactionbtn', '').attr('purpose', 'switchPage');
                }

                elem.toggleClass('rtcp-vod-page-ellipsis', isDot).toggleClass('rtcp-vod-page', !isDot).text(pageNum);
            }
            
            elem.toggleClass('active', (pageNum == currentPage));
            
            fragment.append(elem[0]);
            delete pageElemMap[pageNum];
        });

        pagesCont.empty();
        pagesCont.append(fragment);

        const skipToPageInput = pagesParentCont.find('.rtcp-vod-skip-to-page-input input');
        const oldVal = skipToPageInput.val();

        if(currentPage != oldVal)
        {
            const totalPages = sorter.getTotalPages(category);
            const overflowDigitCount = Math.max(0, totalPages.toString().length - 2);
            const width = 35 + (overflowDigitCount * 10);

            skipToPageInput.css('width', width+'px');
            skipToPageInput.val(sorter.getCurrentPageNo(category));
        }
        
        this.updatePageNavigator(category, categoryPanel);
    },

    updatePageNavigator : function(category, categoryPanel)
    {
        const sorter = this.getCurrentSorter();
        const currentPage = sorter.getCurrentPageNo(category);
        const totalPage = sorter.getTotalPages(category);

        categoryPanel = categoryPanel || this.getDOM(vodDemoConstant.UIConstants.HOME).find('#rtcp-vod-'+category);

        const navigatorCont = categoryPanel.find('.rtcp-vod-page-navigation-cont');

        navigatorCont.find('[value="next"]').toggleClass('disabled', (currentPage >= totalPage));
        navigatorCont.find('[value="prev"]').toggleClass('disabled', (currentPage <= 1));
    },
    
    bindUploadEvents : function(data)
    {
        const root = this.getDOM(vodDemoConstant.UIConstants.ROOT);
        const fileInput = $("#file-input");

        const toggleDragActive = (event) =>
        {
            let isDragLeave = true;
            
            if(event)
            {
                event.preventDefault();
                isDragLeave = (event.type === 'dragleave') && (event.relatedTarget == null);
            }
            
            root.toggleClass('drag-drop-active', !isDragLeave);
        }

        const handleFile = function(event)
        {
            event.preventDefault();
            event.stopPropagation();
            event = event.originalEvent;

            const session = vodDemo.getVodDemoSession();
            const file = ((event.dataTransfer instanceof DataTransfer) ? event.dataTransfer : event.target).files[0];
            const name = file.name.trim();
            const dotIndex = name.lastIndexOf('.');
            const tempTitle = (dotIndex > 0) ? name.slice(0, dotIndex) : name; // removing extension from title
            //const tempTitle = `RTCP_VOD_Sample_${date}_${time}`.slice(0, vodDemo.getContentConfig('length', 'title'));
            const url = URL.createObjectURL(file);
            const uploadTime = Date.now();
            const {date, time} = vodDemo.getDateTime(uploadTime);

            const videoInfo = 
            {
                ...data,
                file, url, name, uploadTime, date, time, tempTitle,
                title : tempTitle,
                status : vodDemoConstant.status.PREVIEW,
                owner : session.getCurrentUserId(),
                ownerDisplayName : session.getCurrentUserName()
            };
            
            const id = data.videoPropId;
            
            root.off('dragover dragend dragleave', toggleDragActive);
            toggleDragActive();

            vodDemo.removeModal();
            vodDemo.updateVODContent(id, videoInfo);
            //vodDemo.openVODStudioModal('uploadMeta', id, videoInfo);

            requestAnimationFrame(() =>  // inside updateVODContent , arrangeContentsInCategory is called which used requestAnimationFrame, without openVODStudioModal rAF gridVideoBox will not be available
            {
                vodDemo.openVODStudioModal('uploadMeta', id, videoInfo);     
            });
        }
        
        fileInput.on('change drop', handleFile);
        root.on('dragover dragend dragleave', toggleDragActive);
    },

    bindUIHandlers : function()
    {
        const doc = $(document);

        doc.off();

        const UICallback = function (event)
        {
            event.stopPropagation();

            const elem = $(this);
            const purpose = elem.attr("purpose");
            const fn = vodDemoHandler.UI[purpose];

            if(typeof fn === 'function')
            {
                fn(elem, event);
            }
        }

        doc.on('click', '[rtcpvodactionbtn]', UICallback);
        doc.on('mousedown', '[rtcpvodactionbtn_md]', UICallback);
    },

    getMoreOptions : function(session, content)
    {
        if(vodDemo.isInHomePage())
        {
            const opts = [];

                if(session.isCurrentUser(content.owner))
                {
                    opts.push('edit');
                    opts.push((content.status === vodDemoConstant.status.UPLOADING) ? 'cancel' : 'delete');
                }

                if((content.status === vodDemoConstant.status.COMPLETED))
            {
                opts.push('view');
            }

            return opts;
        }
    },

    getContentConfig : function(config, elemName)
    {
        const contentConfig = this._vodDemoConfig.studioConfig;

        if(config in contentConfig)
        {
            const info = contentConfig[config];

            if(elemName in info)
            {
                return info[elemName];
            }
            else
            {
                return info;
            }
        }

        return contentConfig;
    },

    getDateTime : function (timestamp)
    {
        const dateStrArr = new Date(timestamp).toString().split(' ');
        const time = dateStrArr[4];

        return {
            date : `${dateStrArr[1]} ${dateStrArr[2]}, ${dateStrArr[3]}`, 
            time : time.substring(0, time.lastIndexOf(':'))
        };
    },

    getVodPlayerConfig : function()
    {
        return this._vodDemoConfig.vodPlayerConfig;
    },

    getVodCategoryIdSorter : function()
    {
        return this._vodCategoryIdSorter;
    },

    getCategoryIdMap()
    {
        return this.getVodCategoryIdSorter().get();
    },

    getUserVodCategoryIdSorter()
    {
        return this._userVodCategoryIdSorter;
    },

    getUserVodCategoryIdMap()
    {
        return this.getUserVodCategoryIdSorter().get();
    },

    getCategoryIds(category)
    {
        return this.getCategoryIdMap()[category] || [];
    },

    getCategoryItems(category)
    {
        const ids = this.getCategoryIds(category);
        const vodContentItems = this.getVodDemoSession().getContentByIdMap();
        var videos = {};

        for(const id of ids)
        {
            const content = vodContentItems[id];
            
            if(content)
            {
                videos[id] = content;
            }
        }

        return videos;
    },
    
    getActiveTab : function()
    {
        return this._activeTab;
    },

    getOrderedCategories : function()
    {
        return this._vodDemoConfig.orderedCategories;
    },

    setActiveTab : function(tab)
    {
        this._activeTab = tab;
    },

    isInHomePage : function()
    {
        return this._page === vodDemoConstant.UIConstants.HOME;
    },

    isInViewerPage : function()
    {
        return this._page === vodDemoConstant.UIConstants.VIEWER;
    },

    setPage : function(page)
    {
        if(this._page !== page)
        {
            this._page = page;
        }
    },

    updateVODContent : function(contentId, newInfo, sorterInstance, gridVIdeoBox)
    {
        if(typeof contentId === 'undefined' || typeof newInfo !== 'object')
        {
            return;
        }

        contentId = Number(contentId);
        
        const sorter = this.getCurrentSorter() || sorterInstance;
        const vodContentItems = sorter.data;
        let info = vodContentItems[contentId];
        const isExisting = (typeof info !== 'undefined');
        const oldInfo = Object.assign({}, info);
        
        let reCategorize, reSorting, currentCategory, oldCategory, isItemInView;
        let updateInfo = {};

        if(isExisting)
        {
            currentCategory = vodDemoConstant.getCategoryGroup(info.status);

            for(const k in newInfo)
            {
                const value = newInfo[k];
                
                if(info[k] === value)
                {
                   continue;
                }

                if(k === 'status')
                {
                    const newCategory = vodDemoConstant.getCategoryGroup(value);
                    
                    if(currentCategory !== newCategory)
                    {
                        oldCategory = currentCategory;
                        currentCategory = newCategory;
                        reCategorize = true;
                    }
                }

                info[k] = value;
                updateInfo[k] = value;
            };

            if(!reCategorize)
            {
                const sortKey = sorter.sortBy[currentCategory].sortKey;

                if(sortKey in updateInfo)
                {
                    reSorting = true;
                }
            }
        }
        else
        {
            const keys = Object.keys(newInfo);
            currentCategory = vodDemoConstant.getCategoryGroup(newInfo.status);

            if(!keys.length || typeof currentCategory === 'undefined')
            {
                return;
            }

            info = updateInfo = vodContentItems[contentId] = newInfo;
            Object.assign(info, newInfo);
            reCategorize = true;
        };

        if(reCategorize || reSorting)
        {
            const sortedConfig = sorter.sortBy[currentCategory];

            if(typeof sortedConfig === 'undefined')
            {   
                const arr = [contentId];
                const newSortList = {[currentCategory] : arr};

                if(isExisting)
                {
                    sorter.delete(contentId, oldCategory);
                }
                
                sorter.addList(newSortList, {[currentCategory] : vodDemo.getDefaultConfig('sorterConfig').getDefault()});
                
                isItemInView = true;
            }
            else
            {
                if(isExisting)
                {
                    isItemInView = sorter.update(contentId, oldCategory, currentCategory);
                }
                else
                {
                    isItemInView = sorter.add(contentId, currentCategory);
                }
            }
            
            let order;

            if(typeof oldCategory !== 'undefined')
            {
                order = [oldCategory, currentCategory];
                order = this.getOrderedCategories().filter(cat => order.includes(cat));
            }
            else
            {
                order = [currentCategory];
            }

            this.arrangeContentsInCategory(this.getVodDemoSession(), order, null, { oldCategory, currentCategory, contentId });
        }

        if('uploadTime' in updateInfo && (!('date' in updateInfo) || !('time' in updateInfo)))
        {
            const dateTimeObj = vodDemo.getDateTime(updateInfo.uploadTime);
            Object.assign(updateInfo, dateTimeObj);
            Object.assign(info, dateTimeObj);
        };

        if(Object.keys(updateInfo).length)
        {
            this.updateGridVideoContainer(gridVIdeoBox, contentId, oldInfo, updateInfo);
            this.updateStudioModalContent(contentId, updateInfo);
        }
    },
  
    updateGridVideoContainer : function(gridVideoBox, id, oldInfo = {}, newInfo = {})
    {
        if(vodDemo.isInViewerPage())
        {
            return;
        }

        const root = this.getDOM(vodDemoConstant.UIConstants.ROOT);
        const session = this.getVodDemoSession();

        if(!gridVideoBox)
        {
            gridVideoBox = root.find('#' + id + '.rtcp-grid-video-box');
        }

        if(gridVideoBox.length === 0)
        {
            return;
        }

        const haskey = (k) => (k in newInfo);
        const hasOldInfo = (typeof oldInfo === 'object');

        const canUpdate = (k) => 
        {
            let isValid = haskey(k);
            
            if(isValid && hasOldInfo)
            {
                isValid = (oldInfo[k] !== newInfo[k])
            }

            return isValid;
        };

        const UIkeys = ['title', 'date', 'time', 'ownername', 'viewcount', 'duration'];

        for(const key of UIkeys)
        {
            if(!haskey(key) || !canUpdate(key))
            {
                continue;
            }

            let value = newInfo[key];

            if(typeof value === 'string' && (key === 'title' || key === 'ownername'))
            {
                newInfo[key] = value;
            }

            if(key === 'viewcount')
            {
                value = value+`<span>${value > 1 ? 'views' : 'view'}</span>`
            }

            gridVideoBox.find('.rtcp-grid-video-'+key).text(value); // avoiding .html for processXSS 
        }

        gridVideoBox.attr('id', id);

        const imgCont = gridVideoBox.find('.rtcp-grid-video-img-container');
        //var updateMoreOpt = false; // same user, same status, different contentID, but mainOption has different icon, then it should update but here we didn't update

        if(canUpdate('status'))
        {
            vodDemo.changeGridVideoStatus(gridVideoBox, newInfo.status);
            //updateMoreOpt = true; // same user, same status, different contentID, but mainOption has different icon, then it should update but here we didn't update
        }

        if(canUpdate('owner'))
        {
            imgCont.find('.rtcp-grid-video-owner-profile img').attr('src', session.getUserImage(newInfo.owner));
            imgCont.find('.rtcp-grid-video-ownername').text(newInfo.ownerDisplayName);

            // if(!updateMoreOpt) // same user, same status, different contentID, but mainOption has different icon, then it should update but here we didn't update
            // {
            //     // updateMoreOpt = true; // same user, same status, different contentID, but mainOption has different icon, then it should update but here we didn't update
            // }
        }

        // if(!updateMoreOpt) // same user, same status, different contentID, but mainOption has different icon, then it should update but here we didn't update
        // {
        //     return;
        // }

        if($('#rtcp-vod-studio-more-opt').parent().attr('id') == id)
        {
            vodDemoUtils.clickOutside.close();
        }

        const info = session.getVodContent(id);
        
        if(typeof newInfo.owner === 'undefined')
        {
            newInfo.owner = info.owner;
        }

        if(typeof newInfo.status === 'undefined') // updateGridVideoContainerOpts needs status and owner
        {
            newInfo.status = info.status;
        }

        this.updateGridVideoContainerOpts(gridVideoBox, session, newInfo);
    },

    updateGridVideoContainerOpts : function(gridVideoBox, session, newInfo)
    {
        const moreOpts = this.getMoreOptions(session, newInfo);
        const hasViewOpt = moreOpts.includes('view');
        const mainOpts = gridVideoBox.find('.rtcp-grid-vod-main-options');
        const mainOptKey = hasViewOpt ? 'view' : 'edit';

        if(hasViewOpt && mainOpts.find('[more_opt]').attr('[more_opt]') !== mainOptKey)
        {
            mainOpts.html(VODTemplate.getVideoGridContainerOpt(mainOptKey));
        }

        gridVideoBox.find('.rtcp-grid-video-details-header .rtcp-grid-video-edit').toggleClass('dN', !moreOpts.includes('edit'));
    },

    updateStudioModalContent : function(contentId, newInfo = {})
    {
        const modal = this.getDOM('root').find(`.rtcp-demo-vod-studio-modal[contentid="${contentId}"]`);

        if(modal.length === 0)
        {
            return;
        }

        const status = newInfo.status;

        if(typeof status !== 'undefined') // This will only update status related changes in modal
        {
            vodDemo.changeGridVideoStatus(modal, status);

            if(status === vodDemoConstant.status.COMPLETED)
            {
                vodDemo.openVODStudioModal('meta', contentId, undefined, true);
            }
            else if(status !== vodDemoConstant.status.UPLOADING)
            {
                const config = VODTemplate.getTemplatesConfigs().footerPurpose['updateMeta'];
                const footerSec = modal.find('.rtcp-demo-video-cont-upload-footer');

                footerSec.find('.rtcp-demo-vod-video-cont-detail-back').remove(); // doing this will remove click events too -> html(VODTemplate.getStudioModalFooter('uploadMeta', status));
                footerSec.find('.rtcp-demo-vod-video-cont-detail-next').attr('purpose', config[1]).text(config[0]);
            }
        }
    },

    cancelUpload : function(contentId)
    {
        if(!contentId)
        {
            return;
        }

        const session = this.getVodDemoSession();
        const sorter = this.getUserVodCategoryIdSorter(); 
        const vodContentItems = sorter.data;
        const content = vodContentItems[contentId];

        if(!session.isCurrentUser(content.owner) || !content)
        {
            return;
        }

        const category = vodDemoConstant.getCategoryGroup(content.status);

        const errorCB = (err) =>
        {
            vodDemo.pushNotification("Error while cancelling content. Please try again.", true);
        };

        const successCB = (resp) =>
        {
            // sorter.delete(+contentId, category);
            // delete vodContentItems[contentId];

            //this.arrangeContentsInCategory(session, category);

            //vodDemo.pushNotification('Upload cancelled successfully.');
        }

        if(content.status === vodDemoConstant.status.UPLOADING)
        {
            vodDemoApi.cancelUpload(contentId, successCB, errorCB);
        
            if(typeof content._uploadReq !== 'undefined')
            {
                content._uploadReq.abort();
                delete content._uploadReq;
            }
        }
        else
        {
            vodDemo.removeModal(contentId);
        }
    },

    deleteVodContent (contentId)
    {
        if(!contentId || this.isInViewerPage())
        {
            return;
        }

        const session = this.getVodDemoSession();
        const sorter = this.getUserVodCategoryIdSorter(); 
        const vodContentItems = sorter.data;
        const content = vodContentItems[contentId];

        if(!session.isCurrentUser(content.owner) || !content)
        {
            return;
        }

        // const category = vodDemoConstant.getCategoryGroup(content.status);
        
        // sorter.delete(+contentId, category);
        // delete vodContentItems[contentId];

        // this.arrangeContentsInCategory(session, category);

        const errorCB = (err) =>
        {
            // vodContentItems[contentId] = content;
            // sorter.add(+contentId, category);
            // this.arrangeContentsInCategory(session, category);

            vodDemo.pushNotification("Error while deleting content. Please try again.", true);
        };

        const successCB = (resp) =>
        {
            if(resp !== null)
            {
                resp = JSON.parse(resp);
            
                if(!resp.status)
                {
                    errorCB();
                    return;
                }
            }

            vodDemo.pushNotification('Content deleted successfully.');

            const category = vodDemoConstant.getCategoryGroup(content.status);
        
            sorter.delete(+contentId, category);
            delete vodContentItems[contentId];

            this.arrangeContentsInCategory(session, category);
        }

        if(content.status === vodDemoConstant.status.UPLOADING || 
            content.status === vodDemoConstant.status.PREVIEW || content.status === vodDemoConstant.status.UPLOAD_FAILED)
        {
            successCB(null);
            return;
        }

        vodDemoApi.deleteContent(content.contentId, successCB, errorCB);
    },

    handleBgImgLoad : function(imgElem, asFileFormat)
    {
        this.toggleGridVideoBg($(imgElem).closest('.rtcp-grid-video-box').attr('id'), asFileFormat);
    },

    toggleGridVideoBg : function (id, asFileFormat)
    {
        const gridVideo = $((id ? '#' + id : '')+'.rtcp-grid-video-box');
        const formatClass = 'rtcp-grid-video-fileformat-box';
        
        if(typeof asFileFormat === 'boolean')
        {
            gridVideo.toggleClass(formatClass, asFileFormat);
            return;
        }

        gridVideo.toggleClass(formatClass);
    },

    getRandomBg : function()
    {
        return Math.max(1, Math.floor(Math.random() * 20));
    },

    setVodDemoSession : function(session)
    {
        this._vodDemoSession = session;
    },

    getVodDemoSession : function()
    {
        return this._vodDemoSession;
    },

    getDOM : function(key)
    {
        if (key in this._vodDOMMap) 
        {
            return this._vodDOMMap[key];
        }

        return $();
    },

    addDOM : function(key, dom)
    {
        this._vodDOMMap[key] = dom;
    },

    removeDOM : function(key)
    {
        delete this._vodDOMMap[key];
    },

    changeGridVideoStatus : function(videoContOrId, status, statusText)
    {
        let contentCont = videoContOrId;

        if(typeof videoContOrId === 'string')
        {
            contentCont = this.getDOM(vodDemoConstant.UIConstants.HOME).find('#' + videoContOrId)
        }   

        if(contentCont.length === 0)
        {
            return;
        }

        const isUploading = (status === vodDemoConstant.status.UPLOADING);
        var statusCont = contentCont.find('.rtcp-grid-video-status-container');
        var isExisting = (statusCont.length > 0);

        if(!isUploading && !(status in this._vodDemoConfig.statusConfig))
        {
            if(isExisting)
            {
                statusCont.remove();
            }

            contentCont.find('.rtcp-grid-vod-main-options').removeClass('dN');
            
            return;
        }

        contentCont.find('.rtcp-grid-vod-main-options').addClass('dN');

        if(!isExisting)
        {
            statusCont = $('<div class="rtcp-grid-video-status-container center" status="'+status+'"></div>');
            contentCont.find('.rtcp-vod-status-container').append(statusCont);
        }
        else if(statusCont.attr('status') === status)
        {
            return statusCont;
        }

        statusCont.attr('status', status);

        if(isUploading)
        {
            statusCont.html(VODTemplate.getUploadProgressBar());
            return statusCont;
        }

        let iconAndMsgCont = statusCont.find('.rtcp-grid-video-status');
        const hasIconAndMsg = (iconAndMsgCont.length > 0);

        if(!hasIconAndMsg)
        {
            iconAndMsgCont = $(VODTemplate.getVideoGridContainerStatus());
            statusCont.html(iconAndMsgCont);
        }

        const iconCont = iconAndMsgCont.find('.rtcp-demo-vod-upload-state-video-icon');
        const msgCont = iconAndMsgCont.find('.rtcp-grid-video-status-text');

        if(hasIconAndMsg)
        {
            vodDemoUtils.removeClass(iconCont, 'rtcp-demo-vod-icon-');
        }

        const iconAndMsg = this._vodDemoConfig.statusConfig[status];

        iconCont.addClass(iconAndMsg[0]);
        msgCont.text(statusText || iconAndMsg[1]);

        return statusCont;
    },

    parseOrFormatTime : function (time, short)
    {   
        if(typeof time === 'string')
        {
            if(time.includes(':'))
            {
                const [hours, minutes, seconds] = time.split(':').map(Number);
                return hours * 3600 + minutes * 60 + seconds;
            }
        }
        else if(typeof time !== 'number' || isNaN(time))
        {
            return;
        }

        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        const timeArr = [minutes, seconds];

        if(hours > 0 || !short)
        {
            timeArr.unshift(hours);
        }

        return timeArr.map(unit => String(unit).padStart(2, '0')).join(':');
    },

    parseCommentTime : function (cTime)
    {
        if(typeof cTime === 'string')
        {
            cTime = Number(cTime)
        }

        if(Number.isNaN(cTime))
        {
            return;
        }
        
        var lastParsedTime = (Date.now() - cTime);
        var lastParsedUnit = 'Just now';

        if(lastParsedTime < 1000)
        {
            return lastParsedUnit;
        }
    
        const units = 
        {
            second : 1000,
            minute : 60,
            hour : 60,
            day : 24,
            week : 7,
            month : 4.345,
            year : 12
        };

        for(const unit in units)
        {
            const convTime = Math.floor(lastParsedTime / units[unit]);

            if(convTime < 1)
            {
                return lastParsedTime+" "+lastParsedUnit+((lastParsedTime > 1) ? 's' : '')+' ago';
            }

            lastParsedTime = convTime;
            lastParsedUnit = unit;
        }
    },

    openPreviewModal : function (data)
    {
        if(data.content.status !== vodDemoConstant.status.PREVIEW)
        {
            this.changeGridVideoStatus(data.studioModal, data.content.status);
            return;
        }

        if(typeof data.content.url === 'undefined')
        {
            return;
        }

        const previewPlayer = data.content.vodPlayer = new RTCMediaPlayerObj(data.studioPlayerId);
        
        previewPlayer.bindCustomEvents = () =>
        {
            const videoElem = previewPlayer._videoInstance;

            const loadedMetadatahandler = () =>
            {
                const duration = data.content.duration = vodDemo.parseOrFormatTime(videoElem.duration, true);

                data.root.find('#'+data.id+'.rtcp-grid-video-box .rtcp-grid-video-duration').text(duration);
                videoElem.removeEventListener('loadedmetadata', loadedMetadatahandler);
            }

            videoElem.addEventListener('loadedmetadata', loadedMetadatahandler);
        }

        previewPlayer.setPlayerConfig(vodDemo.getVodPlayerConfig());
        previewPlayer.loadUrl(data.content.url);
    },

    openMetaModal : function (data)
    {
        const titleCont = data.studioModalRHS.find('.rtcp-demo-vod-studio-modal-body-rhs-title-cont');
        const descriptionCont = data.studioModalRHS.find('.rtcp-demo-vod-studio-modal-body-rhs-description-cont');
        const gridVideoBoxTitle = vodDemo.getDOM(vodDemoConstant.UIConstants.HOME).find('#' + data.id + '.rtcp-grid-video-box .rtcp-grid-video-title');
        const studioModalHeader = data.studioModal.find('.rtcp-demo-vod-studio-modal-header-text');
        const titleInput = titleCont.find('textarea');
        const descriptionInput = descriptionCont.find('textarea');
        const titleCount = titleCont.find('span');
        const descriptionCount = descriptionCont.find('span');
        const configs = VODTemplate.getTemplatesConfigs().footerPurpose;
        const primaryBtn = data.studioPrimaryBtn;
        const content = data.content;

        const updatePrimaryBtn = (value, textLength, limit, key, isTitle, countCont) =>
        {
            const hasLength = (textLength > 0);
            const status = content.status;
            let conf = [];

            if((value !== (content[key] || '')) 
                && (!isTitle || (value.length > 0)) ) // description can be undefined sometimes which makes value !== content[key] true even if both are empty
            {
                conf.push(...configs.updateMeta);

                if(status === vodDemoConstant.status.PROCESSING_FAILED || status === vodDemoConstant.status.UPLOAD_FAILED)
                {
                    conf.push(true);
                }
            }
            else
            {
                const isInPreview = (status === vodDemoConstant.status.PREVIEW);
                const isCompleted = (status === vodDemoConstant.status.COMPLETED);

                if(isInPreview)
                {
                    conf.push(...configs.uploadMeta);
                }
                else if(isCompleted)
                {
                    conf.push(...configs.meta);
                }
                else
                {
                    conf.push(...configs.updateMeta);
                }

                if(!isInPreview && !isCompleted)
                {
                    conf.push(true);
                }
            }
            
            const isDisabled = Boolean(conf[2]) || primaryBtn.hasClass('restricted');

            primaryBtn.toggleClass('disabled', isDisabled);

            if(isDisabled)
            {
                primaryBtn.removeAttr('rtcpdemovodbutton');
            }
            else
            {
                primaryBtn.attr({'rtcpdemovodbutton':'true', 'purpose': conf[1]});
            }

            primaryBtn.text(conf[0]);

            if(isTitle)
            {
                gridVideoBoxTitle.text(value);
                studioModalHeader.text(value);
            }

            countCont.toggleClass('dN', !hasLength).text(textLength+'/'+limit);
        }

        const onTitleChange = (value, textLength, limit) => 
        {

            updatePrimaryBtn(value, textLength, limit, 'title', true, titleCount);

            // const hasLength = (textLength > 0);
            // const status = content.status;

            // let conf;

            // if((value !== content.title) && (value.trim().length > 0))
            // {
            //     conf = configs.updateMeta;
            // }
            // else
            // {
            //     const isUploading = (status === vodDemoConstant.status.UPLOADING);

            //     if(isUploading || status === vodDemoConstant.status.PREVIEW)
            //     {
            //         conf = configs.uploadMeta;

            //         if(isUploading)
            //         {
            //             conf.push(true);
            //         }
            //     }
            //     else if(status === vodDemoConstant.status.COMPLETED)
            //     {
            //         conf = configs.meta;
            //     }
            // }
            
            // const isDisabled = Boolean(conf[2]);

            // primaryBtn.toggleClass('disabled', isDisabled);

            // if(isDisabled)
            // {
            //     primaryBtn.removeAttr('rtcpdemovodbutton');
            // }
            // else
            // {
            //     primaryBtn.attr({'rtcpdemovodbutton':'true', 'purpose': conf[1]});
            // }

            // primaryBtn.text(conf[0]);

            // if(content.title !== value)
            // {
            //     gridVideoBoxTitle.text(value);
            //     studioModalHeader.text(value);
            // }

            // titleCount.toggleClass('dN', !hasLength).text(textLength+'/'+limit);
        }
        
        titleInput.on('blur', () => // before initiateUpload blur event called, so there will be no empty title when initiateUpload called
        {
            if(titleInput.val().length === 0)
            {
                titleInput.val(content.title).trigger('input');
            }
        });

        const onDescriptionChange = (value, length, limit) => 
        {
            updatePrimaryBtn(value, length, limit, 'description', false, descriptionCount);
            // if(content.description !== value)
            // {
            //     const conf = configs.updateMeta;

            //     primaryBtn.toggleClass('disabled', Boolean(conf[2]));
            //     primaryBtn.attr({'rtcpdemovodbutton':'true', 'purpose': conf[1]});
            //     primaryBtn.text(conf[0]);
            // }

            // descriptionCount.toggleClass('dN', length == 0).text(length+'/'+limit);
        }
                    
        vodDemoUtils.bindTextListeners(
        {
            elem : titleInput, 
            limit : vodDemo.getContentConfig('length','title'),
            limitExceedError : {errContClass : "rtcp-demo-vod-studio-modal-body-rhs-title-cont"},
            onTextChange : onTitleChange
        });

        vodDemoUtils.bindTextListeners(
        {
            elem : descriptionInput, 
            limit : vodDemo.getContentConfig('length','description'),
            limitExceedError : {errContClass : "rtcp-demo-vod-studio-modal-body-rhs-description-cont"},
            onTextChange : onDescriptionChange
        });

        const title = data.content.title || data.content.tempTitle;
            
        titleInput.val(title).trigger('input');
        descriptionInput.val(data.content.description || '').trigger('input');
        studioModalHeader.text(title);
    },

    openEnhancementModal : function(data)
    {
        const addChapterBtn = data.studioModalRHS.find('.rtcp-demp-vod-add-chapter-btn');
        var vodStudio;

        const successCB = (studio) =>
        {
            const chapterSuccessCB = (chapters = {}) =>
            {
                for(const chapterId in chapters)
                {
                    const chapter = chapters[chapterId];
                    const time = vodDemo.parseOrFormatTime(chapter.offset, true)
                    const chapterElem = $(VODTemplate.getChapterInfo(chapterId, chapter.title, chapter.description, time)); 
                    
                    data.studioModalRHS.find('.rtcp-demp-vod-add-chapter-elem-sec').append(chapterElem);
                }
            }
            
            addChapterBtn.removeClass('disabled');
            addChapterBtn.attr('rtcpvodactionbtn', '');
            
            data.studioPrimaryBtn.removeClass('disabled');
            studio.loadChapters(chapterSuccessCB);
            vodStudio = studio;
        }

        const errorCB = (error) =>
        {
            addChapterBtn.addClass('disabled');
            addChapterBtn.removeAttr('rtcpvodactionbtn');
        }
        
        if(data.hasVodStudio)
        {
            successCB(data.content.vodStudio);
        }
        else
        {
            data.initVODStudio(successCB, errorCB);
        }
        
        const addChapterModal = $(VODTemplate.getAddChapterModal());
        data.studioModalRHS.append(addChapterModal);

        const titleInput = addChapterModal.find('.vod-chapter-title textarea');
        const descriptionInput = addChapterModal.find('.vod-chapter-description textarea');
        const timerSecInput = addChapterModal.find('.rtcp-demo-vod-add-chapters-modal-body-footer-sec-timer input');
        
        const titleCount = titleInput.next('span');
        const descriptionCount = descriptionInput.next('span');
        const saveBtn = addChapterModal.find('.rtcp-demo-vod-add-chapters-modal-body-footer-sec-actions-cont-save');
        const cancelBtn = saveBtn.siblings();
        const maxTimeLen = 2;
        
        saveBtn.on('click', (event) =>
        {
            event.stopPropagation();
            event.preventDefault();
            
            const title = titleInput.val();
            const description = descriptionInput.val();
            const time = timerSecInput.get().map(elem => elem.value).join(':');
            const formattedTime = vodDemo.parseOrFormatTime(time);

            const chapter = { title, description, offset: formattedTime };
            const isEdit = addChapterModal.attr('chapterId') !== undefined;
            const chaperId = isEdit ? addChapterModal.attr('chapterId') : formattedTime+'_'+Date.now();
            
            vodStudio.addChapter({[chaperId]: chapter});
            
            cancelBtn.trigger('click');

            if(isEdit)
            {
                const chapterElem = data.studioModalRHS.find('.rtcp-demp-vod-add-chapter-elem-sec').find('#' + chaperId);
                chapterElem.replaceWith($(VODTemplate.getChapterInfo(chaperId, title, description, time.startsWith('00:') ? time.slice(3) : time)));
                addChapterModal.removeAttr('chapterId');
            }
            else
            {
                const chapterElem = $(VODTemplate.getChapterInfo(chaperId, title, description, time.startsWith('00:') ? time.slice(3) : time));
                data.studioModalRHS.find('.rtcp-demp-vod-add-chapter-elem-sec').append(chapterElem);
            }
            
            data.studioPrimaryBtn.attr('purpose', 'updateChapters');
            data.studioPrimaryBtn.text('Update');
        });

        const onTitleChange = (value, textLength, limit) =>
        {
            const hasActionAttr = saveBtn.attr('rtcpvodactionbtn') !== undefined;
            const hasLength = (textLength > 0);
            
            let showSaveBtn = hasLength;

            const chapterId = addChapterModal.attr('chapterId');

            if(typeof chapterId !== 'undefined')
            {
                const chapter = vodStudio.getChapter(chapterId);
                
                if(showSaveBtn)
                {
                    showSaveBtn = !(chapter.title === value);
                }
            }

            saveBtn.toggleClass('disabled', !showSaveBtn);

            if(showSaveBtn)
            {
                !hasActionAttr && saveBtn.attr('rtcpvodactionbtn', '');
            }
            else
            {
                hasActionAttr && saveBtn.removeAttr('rtcpvodactionbtn');
            }

            titleCount.toggleClass('dN', !hasLength).text(textLength+'/'+limit);
        }

        const onDescriptionChange = (value, textLength, limit) => 
        {
            const chapterId = addChapterModal.attr('chapterId');
            const hasActionAttr = saveBtn.attr('rtcpvodactionbtn') !== undefined;
            const hasLength = (textLength > 0);

            let showSaveBtn = hasLength;

            if(typeof chapterId !== 'undefined')
            {
                const chapter = vodStudio.getChapter(chapterId);
                
                if(showSaveBtn)
                {
                    showSaveBtn = !(chapter.description === value);
                }

                saveBtn.toggleClass('disabled', !showSaveBtn);

                if(showSaveBtn)
                {
                    !hasActionAttr && saveBtn.attr('rtcpvodactionbtn', '');
                }
                else
                {
                    hasActionAttr && saveBtn.removeAttr('rtcpvodactionbtn');
                }
            }

            descriptionCount.toggleClass('dN', !hasLength).text(textLength+'/'+limit);
        }

        const onChange = (event) =>
        {
            const chapterId = addChapterModal.attr('chapterId');
            const hasActionAttr = saveBtn.attr('rtcpvodactionbtn') !== undefined;
            
            if(typeof chapterId !== 'undefined')
            {
                const chapter = vodStudio.getChapter(chapterId);
                const currentTimeInSec = vodDemo.parseOrFormatTime(timerSecInput.get().map(elem => elem.value).join(':'));
                const showSaveBtn = !(Number(chapter.offset) === currentTimeInSec);

                saveBtn.toggleClass('disabled', !showSaveBtn);

                if(showSaveBtn)
                {
                    !hasActionAttr && saveBtn.attr('rtcpvodactionbtn', '');
                }
                else
                {
                    hasActionAttr && saveBtn.removeAttr('rtcpvodactionbtn');
                }
            }
        }
        
        const isValidNumber = (value) => 
        {
            const strValue = String(value).trim();
            
            if (!strValue)
            {
                return false;
            }
            
            return /^[0-9]$/.test(strValue);
        };

        const onInput = (event, jqueryElem, elem) =>
        {
            let cursorPos = elem.selectionStart;
            let newValue = jqueryElem.val().slice(0, maxTimeLen);

            if(newValue.includes('.'))
            {
                newValue = newValue.replace(/\D/g, '0');
                jqueryElem.trigger(vodDemoConstant.status.ERROR);
            }

            jqueryElem.val(newValue);

            requestAnimationFrame(() => 
            {
                if(cursorPos == maxTimeLen)
                {
                    const nextInput = jqueryElem.nextAll('input');

                    if(nextInput.length)
                    {
                        elem = nextInput.eq(0).focus().get(0);
                        cursorPos = 0;
                    }
                }

                elem.setSelectionRange(cursorPos, cursorPos);
            });
        }

        const onPaste = (event, jqueryElem, elem) =>
        {
            event.preventDefault();

            let newStr = event.originalEvent.clipboardData.getData('text/plain');

            if(!newStr.length)
            {
                return;
            }

            let cursorStartPos = elem.selectionStart;
            let nextAllInputs = jqueryElem.nextAll('input').addBack(jqueryElem);
            let reqStrLen = (nextAllInputs.length * maxTimeLen - cursorStartPos);
            
            newStr = newStr.slice(0, reqStrLen).split('');

            if(newStr.some(char => !isValidNumber(char)))
            {
                jqueryElem.trigger(vodDemoConstant.status.ERROR);
                return;
            }

            const currentValArr = [...nextAllInputs].flatMap(input => input.value.split(''));
            currentValArr.splice(cursorStartPos, newStr.length, ...newStr);

            nextAllInputs.each(function(index) {
                const start = index * maxTimeLen;
                $(this).val(currentValArr.slice(start, start + maxTimeLen).join(''));
            })
        }

        const onBlur = (event, jqueryElem, elem) =>
        {
            const value = jqueryElem.val();

            if(value.length < maxTimeLen)
            {
                jqueryElem.val(value[elem.selectionStart == 1 ? 'padEnd' : 'padStart'](maxTimeLen, '0'));				
            }

            jqueryElem.trigger('change');
        }
        
        const onKeydown = (event, jqueryElem, elem) =>
        {
            const key = event.key;
            const isNumber = isValidNumber(key);
            const isArrowLeft = (event.code == 'ArrowLeft');
            const isArrowKeys = isArrowLeft || (event.code == 'ArrowRight');
            let cursorPos;

            if(!isNumber && !isArrowKeys)
            {
                return;
            }

            event.stopImmediatePropagation();

            if((elem.selectionStart == maxTimeLen) && (elem.selectionEnd == maxTimeLen) && !isArrowLeft)
            {
                event.preventDefault();

                const nextInput = jqueryElem.nextAll('input')[0];

                if(!nextInput)
                {
                    return;
                }

                if(isNumber)
                {
                    nextInput.value = key + nextInput.value.slice(1);
                    cursorPos = 1;
                }

                requestAnimationFrame(() => {
                    cursorPos = cursorPos || 0;
                    nextInput.setSelectionRange(cursorPos, cursorPos);
                    nextInput.focus();
                });
            }

            if(elem.selectionStart == 0 && elem.selectionEnd == 0 && isArrowLeft)
            {
                const prevInput = jqueryElem.prevAll('input')[0];

                if(!prevInput)
                {
                    event.preventDefault();
                    return;
                }
                
                requestAnimationFrame(() => {
                    cursorPos = 0;
                    prevInput.focus();
                    prevInput.setSelectionRange(cursorPos, cursorPos);
                });
            }
        }

        timerSecInput.each(function() {
            const jQelem = $(this);
            const elem = jQelem[0];

            jQelem.on({
                'keydown' : (event) => onKeydown(event, jQelem, elem),
                'input' : (event) => onInput(event, jQelem, elem),
                'blur' : (event) => onBlur(event, jQelem, elem),
                'paste' : (event) => onPaste(event, jQelem, elem),
                'change' : (event) => onChange(event, jQelem, elem)
            })
        });

        const configs = 
        [
            {
                elem : titleInput, 
                limit : vodDemo.getContentConfig('length','chapters_title'), 
                onTextChange : onTitleChange, 
                limitExceedError : {errContClass : "vod-chapter-title"}
            },
            {
                elem : descriptionInput, 
                limit : vodDemo.getContentConfig('length','chapters_description'),
                onTextChange : onDescriptionChange, 
                limitExceedError : {errContClass : 'vod-chapter-description'}
            },
            { 
                elem : timerSecInput,
                limit : maxTimeLen,
                events : ['keydown'],
                isKeyAllowed : isValidNumber,
                limitExceedError : {errContClass : 'rtcp-demo-vod-add-chapters-modal-body-footer-sec-timer'}
            }
        ]

        for(const config of configs)
        {
            vodDemoUtils.bindTextListeners(config);
        }

        requestAnimationFrame(() => {
            const length = titleInput.val().length;
            titleInput.focus();
            titleInput[0].setSelectionRange(length, length);
        });
    },

    openVODStudioModal : function (modal, id, content, overRide)
    {
        if(this.isInViewerPage())
        {
            return;
        }

        const root = this.getDOM(vodDemoConstant.UIConstants.ROOT);
        var studioModal = root.find('.rtcp-demo-vod-studio-modal');
        const isModalExists = (studioModal.length > 0);
        const currentModal = studioModal.attr('modal');
        const session = vodDemo.getVodDemoSession();
        const isSameContent = isModalExists && (studioModal.attr('contentId') == id);
        var vodStudio;

        content = content || session.getVodContent(id); 

        if(!content)
        {
            return;
        }

        if(root.find('.rtcp-vod-container-hidden').length == 0)
        {
            root.append('<div class="rtcp-vod-container-hidden"></div>');
        }

        const studioPlayerId = 'rtcp-demo-vod-studio-modal-player';

        if(!isModalExists)
        {
            studioModal = $(VODTemplate.getVodStudioModal(modal, id, content));
            root.append(studioModal);
        }

        const studioModalRHS = studioModal.find('.rtcp-demo-vod-studio-modal-body-rhs');
        //const isPreviewModal = (modal === vodDemoConstant.status.PREVIEW);
        const isUploadMeta = (modal === 'uploadMeta');
        const isEnhancementModal = (modal === 'inVideo');
        const isMetaModal = (modal === 'meta');
        const sameRHSModals = ['meta', 'uploadMeta'];

        if(isModalExists)
        {          
            if(!sameRHSModals.includes(currentModal) || !sameRHSModals.includes(modal))
            {
                studioModalRHS.html($(VODTemplate.getStudioModalRHS(modal, content)));
            }

            studioModal.attr('modal', modal);
            studioModal.attr('contentId', id);
            //studioModal.find('.rtcp-demo-vod-icon-minimise').toggleClass('dN', isPreviewModal);
            studioModal.find('.rtcp-demo-video-cont-upload-footer').html(VODTemplate.getStudioModalFooter(modal, content.status));
        }

        const slider = studioModal.find('.rtcp-demo-vod-studio-modal-vid-rhs-slider');
        const hasSlider = slider.length > 0;

        if(isEnhancementModal)
        {
            if(!hasSlider)
            {
                studioModal.find('.rtcp-demo-vod-studio-modal-body-lhs').append(VODTemplate.getModalSlider());
            }
        }
        else if(hasSlider)
        {
            slider.remove();
        }

        if( /*isPreviewModal || */ isUploadMeta)
        {
            this.openPreviewModal({
                 id, content, studioPlayerId, root, studioModal
            });

            // if(isPreviewModal)
            // {
            //     return;
            // }
        }

        const studioPrimaryBtn = studioModal.find('.rtcp-demo-vod-video-cont-detail-next');
        const hasVodStudio = (content.vodStudio instanceof ZRVODStudio);
        var vodPlayer = studioModal.find('#'+studioPlayerId);

        if(!vodPlayer.length)
        {
            vodPlayer = $(`<div id="${studioPlayerId}"></div>`)
            studioModal.find('.rtcp-demo-vod-video-cont').html(vodPlayer);
        }

        // if(!isUploadMeta)
        // {
        //     vodPlayer.addClass('rtcpmediaplayerdiv');
        //     vodPlayer.empty();
        //     vodPlayer.append(this.getPlayerSpinner());
        // }

        const playerCB = (studio) =>
        {
            if(studio && !isSameContent || overRide)
            {
                const mediaPlayer = content.vodStudio.getMediaPlayer();

                if(mediaPlayer instanceof RTCMediaPlayerObj)
                {
                    mediaPlayer.closeMediaPlayer();
                }                 

                vodPlayer.empty();
                studio.initVodPlayer(studioPlayerId);
            }
        }

        const initVODStudio = (successCB, errorCB) =>
        {
            const sessionSuccessCB = (studio) =>
            {
                playerCB(studio);

                if(typeof successCB === 'function')
                {
                    successCB(studio);
                }

                vodStudio = studio;
            }

            session.initContentStudio(id, sessionSuccessCB, errorCB);
        }
        
        if(isMetaModal || isUploadMeta)
        {
            this.openMetaModal({
                content,
                isModalExists,
                id,
                studioModalRHS,
                studioModal,
                studioPrimaryBtn,
                hasVodStudio,
            });

            if(isMetaModal)
            {
                initVODStudio();
            }
        }

        if(isEnhancementModal)
        {
            this.openEnhancementModal({
                content,
                studio : vodStudio,
                isModalExists,
                id,
                studioModalRHS,
                studioModal,
                studioPrimaryBtn,
                hasVodStudio,
                initVODStudio
            });
        }
    },

    initiateUpload : function (id, modal)
    {
        const session = this.getVodDemoSession();
        const content = session.getVodContent(id);
        const contentType = content.file.type.split("/")[1];
        const userId = session.getCurrentUserId();

        const uploadType = "mediaprocessing";
        const uploadId = content.videoPropId;
        const root = this.getDOM(vodDemoConstant.UIConstants.ROOT);
        const gridVideoBox = root.find('#' + id + '.rtcp-grid-video-box');

        let title = modal.find('.rtcp-demo-vod-studio-modal-body-rhs-title-cont textarea').val();
        
        if(title.trim().length === 0)
        {
            title = content.tempTitle || `RTCP_VOD_Sample_${content.date}_${content.time}`.slice(0, vodDemo.getContentConfig('length', 'title')); // Title should not be empty
        }

        const description = modal.find('.rtcp-demo-vod-studio-modal-body-rhs-description-cont textarea').val() || '';

        content.title = title;
        content.description = description;

        if(content.vodPlayer instanceof RTCMediaPlayerObj)
        {
            content.vodPlayer.closeMediaPlayer();
        }

        vodDemo.updateVODContent(id, {status : vodDemoConstant.status.UPLOADING}, null, gridVideoBox);

        const setDownloadPercentage = (percentage) =>
        {
            gridVideoBox[0].style.setProperty('--upload_percentage', percentage+'%');
            
            const studio_modal = root.find('[contentid="'+id+'"]');

            if(studio_modal.length)
            {
                studio_modal[0].style.setProperty('--upload_percentage', percentage+'%')
            }
        }
        
        const callBacks = 
        {
            success : function ()
            {
                delete content.vodPlayer; 
                delete content.url; 
                delete content.file; 
                delete content.name; 
                delete content.tempTitle;

                vodDemo.pushNotification('Content uploaded successfully.');
                vodDemo.updateVODContent(id, {status : vodDemoConstant.status.UPLOADED}, null, gridVideoBox); // ws msgObj also handle this
                setDownloadPercentage(0);
            },

            error : function () 
            {
                vodDemo.updateVODContent(id, {status : vodDemoConstant.status.UPLOAD_FAILED}, null, gridVideoBox)
                vodDemo.pushNotification('Error while uploading video. Please try again.', true);
            },

            progress : function (event)
            {
                const percentComplete = (event.loaded / event.total) * 100;
                setDownloadPercentage(percentComplete);
            }
        }

        var xAttrHeaders = 
        {
            "upload-type" : "mediaprocessing",
            "file-name" : encodeURIComponent(content.name),
            "Content-type" : encodeURIComponent(contentType),
            "x-rtcp-attid" :  Date.now(),
            "title" : encodeURIComponent(content.title),
            "description" : encodeURIComponent(content.description),
            "output-format" : 'hlsvod',
            "zuid" : userId
        };

        ZRTFileUploader.init(session.getUploadUrl(), "rtcplatform");
        content._uploadReq = ZRTFileUploader.uploadFile(uploadType, uploadId, content.file, callBacks, xAttrHeaders);
    },

    updateMetaInfo : function (id, elem, modal)
    {
        const titleCont = modal.find('.rtcp-demo-vod-studio-modal-body-rhs-title-cont textarea');
        const descriptionCont = modal.find('.rtcp-demo-vod-studio-modal-body-rhs-description-cont textarea');
        
        const title = titleCont.val();
        const description = descriptionCont.val();

        const content = this.getVodDemoSession().getVodContent(id);

        const successCallBack = (resp) =>
        {
            vodDemo.pushNotification('Content meta info updated successfully.');
            elem.removeClass('restricted');
            
            const newMeta = resp.data || {};
            content.title = newMeta.title;
            content.description = newMeta.description;

            titleCont.trigger('input');
            descriptionCont.trigger('input');
        }

        const errorCallBack = (err) =>
        {
            vodDemo.pushNotification('Error while updating video meta. Please try again.', true);
            elem.removeClass('restricted');

            titleCont.val(content.title).trigger('input');
            descriptionCont.val(content.description).trigger('input');
        }

        vodDemoApi.updateMetaInfo(id, { title, description }, successCallBack, errorCallBack);
    },

    removeModal : function(contentId)
    {
        const root = this.getDOM(vodDemoConstant.UIConstants.ROOT);
        const modal = root.find('[modal]');

        if(typeof contentId !== 'undefined')
        {
            if(modal.attr('contentId') != contentId)
            {
                return;
            }

            const session = this.getVodDemoSession();
            const content = session.getVodContent(contentId);

            if(content && content.vodStudio instanceof ZRVODStudio)
            {
                content.vodStudio.closePlayer();
            }
        }

        root.find('.rtcp-vod-container-hidden').remove();
        modal.remove();
    },

    openHomePage : async function()
    {
        const session = this.getVodDemoSession();
        const root = this.getDOM(vodDemoConstant.UIConstants.ROOT);
        const viewer = this.getDOM(vodDemoConstant.UIConstants.VIEWER);
        const wasInViewerPage = (viewer.length > 0);
        const prevActiveTab = this.getActiveTab();
        const rootHolder = $(document.createComment('root-holder'));
        
        if(wasInViewerPage)
        {
            const viewerContentId = viewer.attr('contentId');
            const viewerContent = session.getVodContent(viewerContentId);
            
            if(viewerContent && viewerContent.vodStudio)
            {
                viewerContent.vodStudio.closePlayer();
            }

            this.viewerState = {};
            $(window).off('.vod_viewer');
        }

        root.replaceWith(rootHolder);

        if(!this.getDOM(vodDemoConstant.UIConstants.HEADER).length)
        {
            const header = $(VODTemplate.getHeader_v2(session.getUserImage()));
            root.html(header);
            this.addDOM(vodDemoConstant.UIConstants.HEADER, header);
        }

        let homePanel = this.getDOM(vodDemoConstant.UIConstants.HOME);
        
        if(!homePanel.length)
        {
            homePanel = $(VODTemplate.getVodHomePanel());
            root.append(homePanel);
            this.addDOM(vodDemoConstant.UIConstants.HOME, homePanel);
        }

        const curtActivetab = prevActiveTab || vodDemoConstant.UIConstants.HOME;
        
        this.setActiveTab(curtActivetab);
        this.setPage(vodDemoConstant.UIConstants.HOME);

        const isHomeTab = (this.getActiveTab() === vodDemoConstant.UIConstants.HOME);

        homePanel.toggleClass('rtcp-vod-zc', isHomeTab);

        let homePageSorter = this.getCurrentSorter();
        
        if(!(homePageSorter instanceof VodSorter))
        {
            const skeleton = $(VODTemplate.getcategoryPanelSkeleton());
            const mainCont = homePanel.find('.rtcp-grid-video-container')
            
            mainCont.children().addClass('dN');
            mainCont.append(skeleton);
            rootHolder.replaceWith(root);
            
            await vodDemoApi.fetchVODHome(session, isHomeTab);
            
            homePageSorter = this.getCurrentSorter();
            root.replaceWith(rootHolder);
            skeleton.remove();
        }

        const isUploadAllowed = vodDemo.isUploadAllowed();

        homePanel.toggleClass('upload-disabled', !isUploadAllowed);
        homePanel.find('[tab="myVideos"]').toggleClass('dN', !isUploadAllowed);

        const completionCallback = () =>
        {
            if(wasInViewerPage)
            {
                viewer.remove();
                this.getDOM(vodDemoConstant.UIConstants.COMMENT_SEC).remove();
                this.getDOM(vodDemoConstant.UIConstants.QUEUE).remove();
                this.getDOM(vodDemoConstant.UIConstants.VIEWER_RHS).remove();

                this.removeDOM(vodDemoConstant.UIConstants.VIEWER);
                this.removeDOM(vodDemoConstant.UIConstants.COMMENT_SEC);
                this.removeDOM(vodDemoConstant.UIConstants.QUEUE);
                this.removeDOM(vodDemoConstant.UIConstants.VIEWER_RHS);
            }

            homePanel.find('.rtcp-vod-upload-btn').toggleClass('dN', (curtActivetab === vodDemoConstant.UIConstants.HOME));

            rootHolder.replaceWith(root);
            this.switchTabs(homePanel.find('.rtcp-vod-tab[tab="'+curtActivetab+'"]'));
        };

        this.arrangeContentsInCategory(session, undefined, completionCallback);
    },

    openViewerPage : function(contentId, videoSec)
    {
        const session = this.getVodDemoSession();
        var content = session.getVodContent(contentId);

        vodDemoHandler.UI.handleClickOnVodDemo();
        
        if(!content)
        {
            return;
        }

        const root = this.getDOM(vodDemoConstant.UIConstants.ROOT);
        const rootHolder = $(document.createComment('root-holder'));
        const isFromQueue = (videoSec === 'queue');
        let viewerRHS = this.getDOM(vodDemoConstant.UIConstants.VIEWER_RHS);
        let viewerPage = this.getDOM(vodDemoConstant.UIConstants.VIEWER);
        let isInViewerPage = (viewerPage.length > 0);

        if(isInViewerPage)
        {
            const oldContentId = viewerPage.attr('contentid');
            const oldContent = session.getVodContent(oldContentId);
            
            if(oldContent.vodStudio)
            {
                oldContent.vodStudio.closePlayer();
            }
        }

        let queueSec, scrollTop;

        if(isFromQueue)
        {
            queueSec = viewerRHS.find('.rtcp-vod-viewerpage-nextvideos-sec');
            scrollTop = queueSec.scrollTop();
        }
        
        root.replaceWith(rootHolder);

        const playerId = "rtcpvodplayer_"+contentId;
        const homePage = this.getDOM(vodDemoConstant.UIConstants.HOME);
        const wasInHomePage = (homePage.length > 0);
        
        this.setPage(vodDemoConstant.UIConstants.VIEWER);

        if(wasInHomePage)
        {
            const studioModal = root.find('.rtcp-demo-vod-studio-modal');
            
            if(studioModal.length)
            {
                const modalContentId = studioModal.attr('contentId');
                const studioModalContent = (contentId === modalContentId) ? content : session.getVodContent(modalContentId);
                
                studioModalContent && studioModalContent.vodStudio && studioModalContent.vodStudio.closePlayer();

                this.removeModal();
            }
        }

        let vodStudio = content.vodStudio;
        let commentSec = viewerPage.find('.rtcp-vod-comment-sec');
        let commentBox = viewerPage.find('.rtcp-self-comment-sec');
        let selfCommentCont = commentBox.find('.rtcp-self-commenter-box');
        
        if(this.getDOM(vodDemoConstant.UIConstants.HEADER).length === 0)
        {
            const header = $(VODTemplate.getHeader_v2(session.getUserImage()));
            root.html(header);
            this.addDOM(vodDemoConstant.UIConstants.HEADER, header);
        }

        let descCont = this.getDOM(vodDemoConstant.UIConstants.DESC_SEC);

        if(!isInViewerPage)
        {
            viewerPage = $(VODTemplate.getViewerPage(playerId, session, content)).attr('contentId',contentId);
            commentSec = viewerPage.find('.rtcp-vod-comment-sec');
            commentBox = $(VODTemplate.getCommentBox(session.getUserImage()));
            viewerRHS = viewerPage.find('.rtcp-vod-viewerpage-rhs');
            descCont = viewerPage.find('.rtcp-vod-video-desc-container');
            selfCommentCont = commentBox.find('.rtcp-self-commenter-box');

            root.append(viewerPage);
            viewerPage.find('.rtcp-vod-comment-sec-header').after(commentBox);
            
            this.addDOM(vodDemoConstant.UIConstants.VIEWER, viewerPage);
            this.addDOM(vodDemoConstant.UIConstants.VIEWER_RHS, viewerRHS);
            this.addDOM(vodDemoConstant.UIConstants.COMMENT_SEC, commentSec);
            this.addDOM(vodDemoConstant.UIConstants.DESC_SEC, descCont);
        }
        else
        {
            descCont.find('.rtcp-vod-video-title').text(content.title);
            descCont.find('.rtcp-vod-video-posted-date').text(content.date);
            descCont.find('.rtcp-vod-video-posted-time').text(content.time);

            descCont.find(".rtcp-vod-video-owner-profile img")[0].src = session.getUserImage(content.owner);
            descCont.find('.rtcp-vod-video-ownername').text(content.ownerDisplayName);

            const likeBtn = descCont.find('.rtcp-vod-like-btn');
            (likeBtn.attr('status') === 'liked') && vodDemoHandler.UI.toggleLikeStatus(likeBtn);

            //reset comment box state when navigating to a different content from viewer page
            const selfCommentBox = commentBox.find('.rtcp-self-commenter-box-input-sec');
            
            selfCommentBox.text('').removeAttr('contenteditable').trigger('input');
            commentSec.find('#rtcp-vod-self-comment-actions').addClass('dN');

            viewerPage.find('.rtcp-vod-video-container').attr('id', playerId);
            viewerPage.attr('contentid', contentId);
        }

        selfCommentCont.removeClass('active').addClass('comment_disabled');
        
        const wrapper = descCont.find('.rtcp-vod-video-desc-wrapper');
        const maxDescLen = vodDemo.getContentConfig('length', 'max_description');
        const descriptionCont = wrapper.find('.rtcp-vod-video-desc');
        const descriptionReadMore = descriptionCont.find('.rtcp-vod-video-desc-read-more');
        const hasReadMore = (descriptionReadMore.length > 0);
        const description = (content.description || '').slice(0, maxDescLen); // slice description to max length allowed in viewer

        descriptionCont.text(description); // avoiding .html() to prevent XSS as description is user generated content

        if(description.length > maxDescLen)
        {
            if(!hasReadMore)
            {
                descriptionCont.append('<span class="rtcp-vod-video-desc-read-more">...more</span>');
            }
            
            wrapper.attr({
                rtcpvodactionbtn : '',
                purpose : 'toggleViewerDescription'
            });

            descriptionCont.attr('expanded', 'false');
        }
        else
        {
            descriptionReadMore.remove();
            wrapper.removeAttr('rtcpvodactionbtn', 'purpose');
            descriptionCont.removeAttr('expanded');
        }

        descCont.find('.rtcp-vod-video-desc-area').toggleClass('dN', description.length == 0);

        if(isFromQueue)
        {
            this.updateQueuePlayingContent(contentId, viewerRHS);
        }
        else
        {
            vodDemo.organizeViewerQueue(
            {
                session, 
                content, 
                contentId,
                wasInHomePage,
                root,
                viewerPage,
                videoSec
            });

            this.updateQueuePlayingContent(contentId, viewerRHS);
        }

        if(wasInHomePage)
        {
            homePage.remove();
            this.removeDOM(vodDemoConstant.UIConstants.HOME);
        }

        rootHolder.replaceWith(root);
        
        if(isFromQueue)
        {
            queueSec.scrollTop(scrollTop);
        }

        const vodPlayer = viewerPage.find('#'+playerId).addClass('rtcpmediaplayerdiv');
        const spinner = this.getPlayerSpinner().addClass('vod-player-spinner-center'); // to differentiate spinner in viewer page and media player
        const viewerLHS = viewerPage.find('.rtcp-vod-viewerpage-lhs');
        
        vodPlayer.empty();
        vodPlayer.append(spinner);
        
        $(window).off('.vod_viewer');
       
        const playerSuccessCB = (studio) =>
        {
            const customEvents = 
            {
                bindCustomEvents ()
                {
                    const videoElem = this._videoInstance;

                    const removeLSSpinner = () => vodPlayer.find('.vod-player-spinner-center').remove();

                    if(videoElem.readyState >= 2) // checking if video has loaded enough data to play before removing spinner, if yes remove spinner immediately else wait for loadeddata event. this is incase loadeddata event has already fired before bindCustomEvents is called which can happen if video is cached or loads very fast
                    {
                        removeLSSpinner();
                    }
                    else
                    {
                        videoElem.addEventListener('loadeddata', removeLSSpinner, { once: true }); // using loadeddata event to remove spinner as it is fired in both cases when video is loaded for first time or loaded from cache, and it is fired after loadedmetadata event which is used to get video dimensions for resizing player, so it ensures that player is resized before spinner is removed
                    }

                    vodStudio.displayChapters();

                    const loadedMetadatahandler = () =>
                    {
                        const videoHeight = videoElem.videoHeight;
                        const videoWidth = videoElem.videoWidth;
                        const aspectRatio = videoWidth / videoHeight;
                        const multiplier = [];

                        if(aspectRatio < 1.25)
                        {
                            multiplier.push(1, 1);
                        }
                        else if(aspectRatio >= 1.25 && aspectRatio <= 1.30)
                        {
                            multiplier.push(5, 4);
                        }
                        else if(aspectRatio >= 1.31 && aspectRatio <= 1.45)
                        {
                            multiplier.push(4, 3);
                        }
                        else if(aspectRatio >= 1.45 && aspectRatio <= 1.55)
                        {
                            multiplier.push(3, 2);
                        }
                        else
                        {
                            multiplier.push(16, 9);
                        }

                        $(window).on('resize.vod_viewer', () => vodDemo.resizeViewerPlayer(viewerLHS, vodPlayer, multiplier)).trigger('resize');

                        videoElem.removeEventListener('loadedmetadata', loadedMetadatahandler);
                    }

                    videoElem.addEventListener('loadedmetadata', loadedMetadatahandler);
                }
            }

            //vodPlayer.removeClass('rtcpmediaplayerdiv').children().remove();
            vodStudio.initVodPlayer(playerId, undefined, customEvents);
        }

        const viewerCommentsList = commentSec.find(".rtcp-vod-viewers-comment-sec").html('');
        viewerCommentsList.replaceWith(rootHolder);

        const commentCB = () =>
        {
            const successCB = (comments) =>
            {
                for(const id in comments)
                {
                    const commentHTML = $(VODTemplate.getViewerCommentBox(session, id, comments[id]));

                    if(viewerCommentsList.children().length)
                    {
                        commentHTML.append('<div class="rtcp-viewer-comment-separator"></div>');
                    }
                    
                    viewerCommentsList.prepend(commentHTML);
                }

                commentSec.find('.rtcp-vod-total-comments-count').text(Object.keys(comments).length);

                rootHolder.replaceWith(viewerCommentsList);
                vodDemoUtils.refreshViewerCommentReadMore();

                selfCommentCont.removeClass('comment_disabled');
            }

            vodStudio.loadComments(successCB);
        }

        if(!vodStudio)
        {
            const successCB = (studio) =>
            {
                vodStudio = studio;
                playerSuccessCB(studio);
                
                studio.loadChapters();
                commentCB();
            }

            session.initContentStudio(contentId, successCB);
        }
        else
        {
            playerSuccessCB(vodStudio);
            vodStudio.displayChapters();
            commentCB();
        }
    },

    resizeViewerPlayer : function (viewerLhs, videoContainer, multiplier)
    {
        requestAnimationFrame(() =>
        {
            const height_1 = Math.round(window.innerHeight - 245);
            const width_1 = Math.round((multiplier[0] * height_1) / multiplier[1]);
            const width_2 = window.innerWidth - 345 - 70;
            const height_2 = Math.round((multiplier[1] * width_2) / multiplier[0]);
            const offset = ((width_1 * height_1) < (width_2 * height_2)) ? {width : width_1, height : height_1} : {width : width_2, height : height_2};

            const newHeight = Math.max(offset.height, 0.60 * window.innerHeight) + 'px';
            const newWidth = Math.max(offset.width, 0.60 * window.innerWidth) + 'px';

            viewerLhs.css({width : newWidth});
            videoContainer.css({height : newHeight, width : newWidth});
        });
    },

    organizeViewerQueue : async function (data)
    {
        const viewerRHS = this.getDOM(vodDemoConstant.UIConstants.VIEWER_RHS);
        const session = data.session;
        const pageLimit = 10;
        const category = vodDemoConstant.status.COMPLETED;

        let viewerState = this.getViewerState();
        // let isPublicContent = (((data.videoSec === 'related') ? viewerState.relatedVideosConf : viewerState.queueConf) || {}).scope;
        
        // if(typeof isPublicContent === 'undefined')
        // {
        //     isPublicContent = (this.getActiveTab() === vodDemoConstant.UIConstants.HOME);
        // }

        const isPublicContent = window.history.state.isPublic;

        const sorters =
        {
            0 : this.getUserVodCategoryIdSorter,
            1 : this.getVodCategoryIdSorter
        };

        const gridVideoBoxesIdMap = {};
        const allGridBoxFragment = $(document.createDocumentFragment());

        data.root.find('.rtcp-grid-video-box').each(function (_, elem)
        {
            elem = $(this);

            allGridBoxFragment.append(elem);
            gridVideoBoxesIdMap[+(elem.attr('id'))] = elem;
        });

        let playlistSec = this.getDOM(vodDemoConstant.UIConstants.QUEUE);

        if(!playlistSec.length)
        {
            playlistSec = $(VODTemplate.getVideoQueuePanel());
            viewerRHS.prepend(playlistSec);
            this.addDOM(vodDemoConstant.UIConstants.QUEUE, playlistSec);
        };

        const playlistMainCont = playlistSec.find('.rtcp-vod-viewerpage-nextvideos-list');
        const relatedVideosCont = viewerRHS.find('.rtcp-vod-video-recommendations-list');
        let existingIds = [];

        const queueConf = 
        {
            isQue : true,
            container : playlistMainCont
        };

        const relVideosConf = 
        {
            container : relatedVideosCont
        };

        const loadVideos = (conf) =>
        {
            const {isQue, scope, sorter} = conf;
            const allIds = sorter.get()[category] || [];
            const totalLength = allIds.length;
            const placeHolder = $(document.createComment('placeholder'));
            const mainCont = conf.container;
            let start, end, ids;
            
            mainCont.replaceWith(placeHolder);
            
            if(!totalLength)
            {
                start = end = 0;
                ids = allIds;
            }
            else if(isQue)
            {
                start = allIds.indexOf(Number(data.contentId));
                end = Math.min(start + pageLimit - 1, totalLength - 1);

                const length = (end - start + 1);

                if(length < pageLimit)
                {
                    start = Math.max(0,  start - (pageLimit - length));
                }

                ids = allIds.slice(start, end + 1);
            }
            else
            {
                ids = [];
                start = end = 0;

                while((ids.length < pageLimit) && (end < totalLength))
                {
                    const id = allIds[end];

                    end+=1;

                    if(existingIds.includes(id))
                    {
                        continue;
                    }

                    ids.push(id);

                    if(end >= totalLength)
                    {
                        end = totalLength - 1;
                        break;
                    }
                }
            }

            const arr = Array(ids.length);
            const idVsContent = sorter.data;

            existingIds.push(...ids);

            for(let i = 0; i < ids.length; i++)
            {
                const id = ids[i];

                let gridVideoBox = gridVideoBoxesIdMap[id];
                
                if(!gridVideoBox)
                {
                    gridVideoBox = $(VODTemplate.getVideoGridContainer(session, id, idVsContent[id], 'openViewerPage'))
                }

                gridVideoBox.attr({
                    'purpose': 'playFromViewerPage',
                    'sec' : (isQue ? 'queue' : 'related'),
                    'rtcpvodactionbtn': ''
                }).removeClass('dN');
                
                arr[i] = gridVideoBox;
            }

            mainCont.empty();
            mainCont.append(...arr).removeClass('loading');
            placeHolder.replaceWith(mainCont);

            requestAnimationFrame(() => 
            {
                if(!isQue)
                {
                    if(arr.length !== 0)
                    {
                        const height = (arr[0].innerHeight() * arr.length) + (arr.length * 8) + 40;
                        mainCont.css({ height : height+'px' });
                    }
                }
            });

            viewerState[isQue ? 'queueConf' : 'relatedVideosConf'] = 
            {
                sorter,
                scope,
                start,
                end
            }

            return Promise.resolve();
        }

        const videoBoxSkeletons = $(VODTemplate.getVideoBoxSkeleton().repeat(5));
        const promises = [];

        const executePromises = async () =>
        {
            for(let p = 0; p < promises.length; p++)
            {
                const cb = promises[p];

                if(cb === true)
                {
                    continue;  
                }

                if(cb === null)
                {
                    return;
                }

                await cb();

                promises[p] = true;
            }
        }

        for(const conf of [queueConf, relVideosConf])
        {
            const isQue = conf.isQue;
            const scope = Number(isQue ? isPublicContent : !isPublicContent);
            const sorter = sorters[scope].call(this);

            if(sorter instanceof VodSorter)
            {
                loadVideos({...conf, scope, sorter});
            }
            else
            {
                const index = promises.length;
                promises[index] = null;
                
                conf.container.html(videoBoxSkeletons);
                conf.container.addClass('loading');

                vodDemoApi.fetchVODHome(
                    session, 
                    scope, 
                    function(sorter) 
                    {
                        promises[index] = () => 
                        {
                            loadVideos({...conf, scope, sorter});

                            if(isQue)
                            {
                                vodDemo.updateQueuePlayingContent(data.contentId, viewerRHS);
                            }
                        };

                        executePromises();
                    });
            }
        }
    },

    updateQueuePlayingContent : function(newContentId, viewerRHS)
    {
        viewerRHS = viewerRHS || this.getDOM(vodDemoConstant.UIConstants.VIEWER_RHS);
        
        const previousPlayedElem = viewerRHS.find('.rtcp-grid-video-box.playing');
        previousPlayedElem.removeClass('playing').find('.rtcp-vod-video-box-wave-icon').remove();
        
        const currentPlayingElem = viewerRHS.find('#'+newContentId);
        let playIcon = currentPlayingElem.find('.rtcp-vod-video-box-wave-icon');

        if(!playIcon.length)
        {
            playIcon = $(VODTemplate.getVideoBoxWaveIcon());
            currentPlayingElem.find('.rtcp-grid-video-box-wrapper').append(playIcon);
        }

        currentPlayingElem.addClass('playing');
    },

    handlePopState : function(event)
    {
        const state = event.state;
        const propId = state ? state.propId : undefined;

        if(propId)
        {
            vodDemo.openViewerPage(propId);
        }
        else
        {
            vodDemo.openHomePage();
            vodDemo.pushHistoryState({}, 'VOD', '');
        }
    },

    pushHistoryState : function(stateObj, title, addUrlPath)
    {
        const url = window.location.origin+'/demo/playhub'+addUrlPath;
        const historyAPI = window.history;

        if(historyAPI)
        {
            if('propId' in stateObj && typeof stateObj.isPublic === 'undefined' && vodDemo.isInHomePage())
            {
                stateObj.isPublic = (vodDemo.getActiveTab() === vodDemoConstant.UIConstants.HOME);
            }

            historyAPI.pushState(stateObj, title, url);
        }
    },

    pushNotification : function(message, isError, duration = 2000, timeoutClearCB)
    {
        const root = this.getDOM(vodDemoConstant.UIConstants.ROOT);
        const notification = $(VODTemplate.getVodBanner(message, isError));
        const notificationTop = 56;
        
        const allbanners = () => root.find('.rtcp-demo-vod-banner:not(.timer-cleared)');
        const notifyContLen = allbanners().length;
        
        let top = notificationTop;
        let height;

        root.append(notification);
        height = notification.outerHeight();

        if(notifyContLen > 0)
        {
            top += notifyContLen * (height + 10);
        }

        requestAnimationFrame(() => {
            notification.css({ top : top+'px' });
        });

        const notificationTimeout = setTimeout(() => 
        {
            requestAnimationFrame (() => 
            {
                clearTimeout(notificationTimeout);

                if(typeof timeoutClearCB === 'function')
                {
                    timeoutClearCB();
                }

                notification.addClass('timer-cleared');
                notification.css({ top : `-${height}px`});

                let newTop;

                allbanners().each(function(index)  
                {                                                          
                    const elem = $(this);

                    if(elem.is(notification))
                    {
                        return;
                    }

                    newTop = newTop ? newTop + (elem.outerHeight() + 10) : notificationTop;

                    elem.css({ top : newTop+'px' });
                });

                notification.on('transitionend', () => 
                {
                    notification.remove();
                });
            
            })
        }, duration);
    },

    setTheme : function(isToggled)
    {
        const cookie = (RTCPCookie.get('vod_demo_theme') === 'true') ? true : false;
        const root = vodDemo.getDOM(vodDemoConstant.UIConstants.ROOT);
        const darkThemeClass = 'night-mode';

        isDark = (typeof isToggled === 'boolean') ? !root.hasClass(darkThemeClass) : (cookie || false);

        root.toggleClass(darkThemeClass, isDark);

        if(cookie !== isDark)
        {
            RTCPCookie.set('vod_demo_theme', isDark);
        }
    },

    switchTabs : async function(elem, isClicked)
    {
        if(elem.hasClass('active'))
        {
            return;
        }

        if(isClicked)
        {
            const activeTab = this.getActiveTab();
            const selectedTab = elem.attr('tab');
        
            if(activeTab === selectedTab)
            {
                return;
            }

            this.setActiveTab(selectedTab);
            this.openHomePage();
            
        }

        const activeTab = $(".rtcp-vod-tab.active");
        const tabActiveBar = $(".rtcp-vod-tab-active-bar");
        const elemOuterWidth = elem.outerWidth();
        const elemLeft = elem.position().left;
        
        tabActiveBar.animate({'width': '20px'}, 10, () => {
            tabActiveBar.animate({left : elemLeft + 'px',width : elemOuterWidth + 'px'}, 100);
            activeTab.removeClass('active');
            elem.addClass('active');
        });
    }
};